import _ from "lodash";
import { IProxyProvider, IProxy, IProxyRes, APIKeyConfig } from "../repo";
import { TinsoftClient } from "./tinsoftClient";
import { sleep } from "../../util";
import { logger } from "../../logger";

const DURATION_BETWEEEN_TWO_REQUEST = 6; // unit is second
const CHANGE_PROXY_AFTER = 130;
const MIN_PROXY_TIMEOUT = 300;

export class TinsoftProvider implements IProxyProvider {
  client: TinsoftClient;
  listProxy: { [key: string]: IProxy | null };
  listKey: APIKeyConfig[];
  currentKeyIndex: number;
  lastRequestTime: { [key: string]: number };

  constructor(client: TinsoftClient, listKey: APIKeyConfig[]) {
    this.client = client;
    this.listKey = listKey;
    this.listProxy = {};
    this.lastRequestTime = {};
    this.currentKeyIndex = 0;

    for (let key of listKey) {
      this.lastRequestTime[key.value] = new Date().getTime();
      this.listProxy[key.value] = null;
    }
  }

  async cronRenewProxy() {
    while (true) {
      logger.info("run cronRenewProxy()");

      const listAPIKey = Object.keys(this.listProxy);
      for (let i = 0; i < listAPIKey.length; i++) {
        const apiKey = listAPIKey[i];
        const apiKeyConfig: APIKeyConfig | undefined = _.find(this.listKey, {
          value: apiKey,
        });
        let proxy = this.listProxy[apiKey];
        const currentTime = new Date().getTime();
        let durationBetweenTwoRequest = DURATION_BETWEEEN_TWO_REQUEST * 1000;
        if (!apiKeyConfig?.shouldChangeProxy) {
          durationBetweenTwoRequest = durationBetweenTwoRequest * 2;
        }
        const nextRequestTime =
          this.lastRequestTime[apiKey] + durationBetweenTwoRequest;
        const allowToMakeRequest = currentTime >= nextRequestTime;
        let notFoundCurrentProxy = false; // when there is no proxy found currently with this @apiKey

        if (
          allowToMakeRequest ||
          !proxy ||
          (allowToMakeRequest && !apiKeyConfig?.shouldChangeProxy)
        ) {
          this.lastRequestTime[apiKey] = new Date().getTime();
          const { proxy: currentProxy, error } =
            await this.client.getCurrentProxy(apiKey);
          logger.info("Get current proxy: ", currentProxy);

          if (error !== null) {
            logger.error("Error getCurrentProxy(): ", error, apiKey);
            await sleep(durationBetweenTwoRequest);

            if (!error?.includes("proxy not found!")) {
              continue;
            }

            notFoundCurrentProxy = true;
          }

          if (currentProxy !== null) {
            if (proxy === null) {
              currentProxy.createdAt =
                new Date().getTime() -
                (CHANGE_PROXY_AFTER - DURATION_BETWEEEN_TWO_REQUEST) * 1000;
            } else {
              currentProxy.createdAt = proxy.createdAt;
            }

            this.listProxy[apiKey] = currentProxy;
            proxy = currentProxy;
          }
        }

        if (!apiKeyConfig?.shouldChangeProxy) {
          continue;
        }

        // change proxy
        const isProxyTimeout =
          proxy === null || proxy.timeout < MIN_PROXY_TIMEOUT;
        const isProxyShouldChange =
          proxy === null ||
          new Date().getTime() > proxy.createdAt + CHANGE_PROXY_AFTER * 1000;
        const forceChangeProxy =
          isProxyTimeout || isProxyShouldChange || notFoundCurrentProxy;

        if (forceChangeProxy && allowToMakeRequest) {
          this.lastRequestTime[apiKey] = new Date().getTime();
          const { proxy: newProxy, error } = await this.client.changeProxy(
            apiKey
          );

          if (error !== null) {
            logger.error("Error changeProxy(): ", error, apiKey);
            await sleep(DURATION_BETWEEEN_TWO_REQUEST * 1000);
            continue;
          }

          logger.info("Change proxy: ", newProxy);
          this.listProxy[apiKey] = newProxy;
        }
      }

      await sleep(2000);
    }
  }

  async getAProxy(currentIP?: string): Promise<IProxyRes> {
    const defaultAPIKey = "";
    let apiKey = defaultAPIKey;

    const listAPIKey = Object.keys(this.listProxy);
    for (let i = 0; i < listAPIKey.length; i++) {
      const key = listAPIKey[i];
      const proxy = this.listProxy[key];

      // use the same api key if @currentIP is provided
      if (currentIP && proxy?.ip === currentIP) {
        apiKey = key;
        break;
      }
    }

    // if can not find apiKey of @currentIP
    if (apiKey === defaultAPIKey) {
      apiKey = this.getNextAPIKey();
    }

    const proxy = this.listProxy[apiKey];
    if (proxy !== null) {
      return { proxy, error: null };
    }

    this.lastRequestTime[apiKey] = new Date().getTime();
    const apiKeyConfig: APIKeyConfig | undefined = _.find(this.listKey, {
      value: apiKey,
    });

    if (apiKeyConfig?.shouldChangeProxy) {
      const { proxy: newProxy, error } = await this.client.changeProxy(apiKey);
      this.listProxy[apiKey] = newProxy;
      return {
        proxy: newProxy,
        error,
      };
    }

    return {
      proxy: null,
      error: "proxy not found!",
    };
  }

  getNextAPIKey(): string {
    const nextKeyIndex = (this.currentKeyIndex + 1) % this.listKey.length;
    this.currentKeyIndex = nextKeyIndex;
    return this.listKey[nextKeyIndex % this.listKey.length]?.value;
  }

  getCurrentAPIKey(): string {
    return this.listKey[this.currentKeyIndex]?.value;
  }
}
