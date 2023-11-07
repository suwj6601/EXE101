import { Page, Browser } from "puppeteer";
import { TEMP_PROFILENAME } from "./constant";
import { BASE_DIR } from "../mainProcess";

export interface ICrawler {
  browser: Browser | null;
  page: Page | null;
}

export const getProfilePath = (profileName: string) =>
  `${BASE_DIR}/chrome-profile/${profileName}`;

export const getProfileNameForThread = (threadNumber: number) =>
  `${TEMP_PROFILENAME}_${threadNumber}`;
