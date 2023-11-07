import React, { useContext } from "react";
import { Dropdown, Menu } from "antd";
import { LanguageContext } from "@/language";
import { useTranslation } from "@/hook";
import { LanguageSwitcherWrapper, MenuIconWrapper } from "./style";

const LanguageSwitcher = () => {
  const { locale, onChangeLocale } = useContext(LanguageContext);
  const { translate } = useTranslation();

  const renderLanguageSelection = () => {
    return (
      <Menu selectedKeys={[locale]} onClick={({ key }) => onChangeLocale(key)}>
        <Menu.Item key="vi">
          <MenuIconWrapper>
            <img src="/vietnam.png" alt="vi" className="language-flag" />

            {translate("vietnamese")}
          </MenuIconWrapper>
        </Menu.Item>

        <Menu.Item key="en">
          <MenuIconWrapper>
            <img src="/en.png" alt="en" className="language-flag" />

            {translate("english")}
          </MenuIconWrapper>
        </Menu.Item>
      </Menu>
    );
  };

  return (
    <LanguageSwitcherWrapper>
      <Dropdown overlay={renderLanguageSelection()}>
        <img
          src={locale === "vi" ? "/vietnam.png" : "/en.png"}
          alt="flag"
          className="flag"
        />
      </Dropdown>
    </LanguageSwitcherWrapper>
  );
};

export default LanguageSwitcher;
