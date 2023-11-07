interface ITheme {
  colorBgPrimary: string;
  colorBgSecondary: string;
  colorTextPrimary: string;
  colorTextSecondary: string;
  colorPrimary: string;
  colorPrimaryLight: string;
  menuBgColor: string;
  subMenuLabelColor: string;
  colorBorder: string;
  backgroundSideBarIcon: string;
  ghostBtnColor: string;
  ghostBtnColorHover: string;
}

const lightTheme: ITheme = {
  colorBgPrimary: "rgb(255, 255, 255)",
  colorBgSecondary: "rgba(242, 242, 242)",
  colorTextPrimary: "rgb(56, 60, 64)",
  colorTextSecondary: "rgb(110, 107, 123)",
  colorPrimary: "rgb(79, 70, 229)",
  colorPrimaryLight: "rgb(133, 122, 233)",
  menuBgColor: "rgb(255, 255, 255)",
  subMenuLabelColor: "rgb(79, 70, 229)",
  colorBorder: "#e8e8e8",
  backgroundSideBarIcon: "rgba(0, 0, 0, 0.05)",
  ghostBtnColor: "rgb(79, 70, 229)",
  ghostBtnColorHover: "rgb(133, 122, 233)",
};

const darkTheme: ITheme = {
  colorBgPrimary: "rgb(20, 20, 20)",
  colorBgSecondary: "rgb(48, 48, 48)",
  colorTextPrimary: "rgb(255, 255, 255)",
  colorTextSecondary: "rgb(242, 242, 230)",
  colorPrimary: "rgb(79, 70, 229)",
  colorPrimaryLight: "rgb(133, 122, 233)",
  menuBgColor: "rgb(48, 48, 48)",
  subMenuLabelColor: "rgb(255, 255, 255)",
  colorBorder: "rgb(56, 60, 64)",
  backgroundSideBarIcon: "rgba(255, 255, 255, 0.2)",
  ghostBtnColor: "rgb(133, 122, 233)",
  ghostBtnColorHover: "rgb(79, 70, 229)",
};

const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

export { lightTheme, darkTheme, THEME };
