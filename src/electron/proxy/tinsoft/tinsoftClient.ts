import axios from "axios";
import { IProxyRes } from "../repo";

export class TinsoftClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async changeProxy(apiKey: string): Promise<IProxyRes> {
    try {
      const url = `${this.baseURL}/changeProxy.php?key=${apiKey}`;
      const response = await axios.get(url, { timeout: 5000 });
      const { description, success, proxy, timeout } = response?.data;
      if (!success) {
        return {
          proxy: null,
          error: description,
        };
      }

      const proxyInfo = proxy?.split(":");
      const ip = proxyInfo[0];
      const port = Number(proxyInfo[1]);

      return {
        proxy: {
          ip,
          port,
          timeout,
          createdAt: new Date().getTime(),
        },
        error: null,
      };
    } catch (err: any) {
      return {
        error: err?.message,
        proxy: null,
      };
    }
  }

  async getCurrentProxy(apiKey: string): Promise<IProxyRes> {
    try {
      const url = `${this.baseURL}/getProxy.php?key=${apiKey}`;
      const response = await axios.get(url, { timeout: 5000 });
      const { description, success, proxy, timeout } = response?.data;
      if (!success) {
        return {
          proxy: null,
          error: description,
        };
      }
      const proxyInfo = proxy?.split(":");
      const ip = proxyInfo[0];
      const port = Number(proxyInfo[1]);

      return {
        proxy: {
          ip,
          port,
          timeout,
          createdAt: new Date().getTime(),
        },
        error: null,
      };
    } catch (err: any) {
      return {
        error: err?.message,
        proxy: null,
      };
    }
  }
}
