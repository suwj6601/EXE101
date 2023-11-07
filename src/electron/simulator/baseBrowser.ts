import puppeteer from "puppeteer";
import { IProxyProvider, IProxy } from "../proxy";
import { sleep } from "../util";
import { logger } from "../logger";
import { ICrawler, getProfilePath } from "./common";

const getChromiumExecPath = () => {
  return puppeteer.executablePath().replace("app.asar", "app.asar.unpacked");
};

export class BaseBrowser {
  private proxyProvider: IProxyProvider;

  constructor(proxyProvider: IProxyProvider) {
    this.proxyProvider = proxyProvider;
  }

  async createBrowser(
    profileName: string,
    browserIndex: number,
    useProxy?: boolean,
    maxView?: boolean
  ): Promise<ICrawler | null> {
    let crawler: ICrawler | null = null;
    const windowWidth = 530;

    try {
      const args = ["--no-default-browser-check"];

      if (!maxView) {
        args.push(`--window-size=${windowWidth},800`);
        args.push(
          `--window-position=${windowWidth * (browserIndex % 3)},${
            300 * (browserIndex - (browserIndex % 3))
          }`
        );
      } else {
        args.push(`--window-size=1000,800`);
      }
      // wait until able to get a proxy
      let proxy: IProxy;
      while (useProxy) {
        const res = await this.proxyProvider.getAProxy();
        if (res?.error) {
          await sleep(3000);
          continue;
        }

        if (res?.proxy) {
          proxy = res?.proxy;
          logger.info(`With proxy ${proxy?.ip}:${proxy?.port}`);
          args.push(`--proxy-server=${proxy?.ip}:${proxy?.port}`);
          break;
        }
      }

      const browser = await puppeteer.launch({
        executablePath: getChromiumExecPath(),
        headless: false,
        ignoreDefaultArgs: ["--enable-automation", "--disable-extensions"],
        args,
        defaultViewport: null,
        userDataDir: getProfilePath(profileName),
      });
      const [page] = await browser.pages();

      crawler = {
        browser,
        page,
      };
    } catch (err: any) {
      logger.error("createBrowser() err: ", err);
    }

    return crawler;
  }
}
