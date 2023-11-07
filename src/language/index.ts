import { createContext } from "react";
import en from "./en.json";
import vi from "./vi.json";

export const dictionaryList: { [key: string]: { [key: string]: string } } = {
  en,
  vi,
};

export const LOCALE = {
  EN: "en",
  VI: "vi",
};

export const listLocale = {
  [LOCALE.EN]: "English",
  [LOCALE.VI]: "Tiếng Việt",
};

export const LanguageContext = createContext({
  locale: LOCALE.VI,
  onChangeLocale: (locale: string) => {},
});
