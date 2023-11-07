import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import viVN from "antd/lib/locale/vi_VN";
import "antd/dist/reset.css";
import { persistStore } from "redux-persist";
import { GlobalStyle } from "@/style/global";
import { OverideAntdStyle } from "@/style/overideAntd";
import { store, RootState } from "@/redux/store";
import { listLocale, LOCALE, LanguageContext } from "@/language";
import AppRoute from "@/route";
import { lightTheme, darkTheme } from "@/style/theme";

const persistor = persistStore(store);

ConfigProvider.config({
  theme: {
    primaryColor: "#4f46e5",
  },
});

const App = () => {
  const [locale, setLocale] = useState(LOCALE.VI);

  const isLightMode = store.getState().Layout.isLightMode;

  const contextProvider = {
    locale,
    onChangeLocale: (selected: string) => {
      const newLocale = listLocale[selected] ? selected : LOCALE.VI;
      setLocale(newLocale);
      localStorage.setItem("locale", newLocale);
    },
  };

  return (
    <ConfigProvider locale={viVN}>
      <Provider store={store}>
        <LanguageContext.Provider value={contextProvider}>
          <PersistGate persistor={persistor}>
            <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
              <GlobalStyle />
              <OverideAntdStyle />
              <AppRoute />
            </ThemeProvider>
          </PersistGate>
        </LanguageContext.Provider>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
