import { TinsoftProvider, TinsoftClient } from "./proxy";
import { APIKeyConfig } from "./proxy/repo";

const listKey: APIKeyConfig[] = [];

let tinsoftProvider: TinsoftProvider | null = null;
const getTinsoftProvider = () => {
  if (tinsoftProvider !== null) {
    return tinsoftProvider;
  }

  const baseURL = "http://proxy.tinsoftsv.com/api";
  const tinsoftClient = new TinsoftClient(baseURL);
  tinsoftProvider = new TinsoftProvider(tinsoftClient, listKey);
  return tinsoftProvider;
};

export { getTinsoftProvider };
