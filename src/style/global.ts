import { createGlobalStyle } from "styled-components";

export interface ThemeProps {
  theme?: any;
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--text-font) !important;
    font-size: 60%;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    
    @media only screen and (max-width: 1400px) {
      font-size: 60%;
    }

    @media only screen and (min-width: 1400px) {
      font-size: 62.5%;
    }
  }

  * {
    box-sizing: border-box;
  }

  /* thay đổi màu mặc định khi kéo chọn vùng chữ của trình duyệt */
  ::selection {
    background: var(--color-primary) !important;
  }

  ::-moz-selection { /* Code for Firefox */
    background: var(--color-primary) !important;
  }

  /* https://stackoverflow.com/questions/4472891/how-can-i-disable-zoom-on-a-mobile-web-page */
  :root {
    --text-font: Montserrat, sans-serif;
    --text-font-secondary: "Open Sans", sans-serif;
    --color-text: #383c40;
    --color-text-secondary: #6E6B7B;
    --color-primary: rgba(79, 70, 229, 1);
    --color-primary-light: #867ae9;
    --color-text-white-light: rgb(242, 242, 230);
    --color-text-white: rgb(255, 255, 255);
    --color-secondary: #ff7600;
    --color-gray: #6e6b7b;
    --color-background: #f2f2f2;
    --color-background-dark: rgba(48, 48, 48, 0.4);
    --color-background-gray: rgba(32, 32, 32, 0.8);
    --color-background-primary: rgba(133, 122, 233, 0.15);
    --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    --box-shadow-large: 0px 0px 20px rgba(0, 0, 0, 0.1);
    --border-radius: 0.6rem;
    --border-radius-1: 1rem;
    --padding: 1.5rem 2rem;
    --padding-taller: 2.5rem 2rem;
    --padding-wider: 1.5rem 3rem;
    --padding-small: 1.5rem 1.5rem;
    --padding-page: 2rem 3rem;
    --padding-page-small: 2rem 1.5rem;
    --margin-bottom: 1.5rem;
    --margin-bottom-small: 1rem;
    --margin-bottom-large: 2.5rem;
    --margin-right: 1.5rem;
    --margin-right-small: 1rem;
    --margin-left: 1.5rem;
    --margin-left-small: 1rem;
    --margin-top: 1.5rem;
    --margin-top-small: 1rem;
    --margin-top-large: 2rem;
    --color-blue-light: #eaf4ff;
    --color-orange-light: #ffefe0;
    --color-border-light: #f5f5f5de;
    --color-border: #e8e8e8;
    --color-orange-red: #FF6767;
    --color-pink: rgb(145, 107, 191);
    --color-success: #7FC8A9;
    --color-error: #FF6767;
    --color-yellow: #FFF47D;
    --color-brown: rgb(197, 104, 36);
    --color-blue: rgb(92, 122, 234);
    --background-success: rgba(127, 200, 169, 0.2);
    --background-error: rgba(255, 103, 103, 0.2);
    --background-yellow: rgba(255, 244, 125, 0.2);
    --background-pink: rgb(145, 107, 191, 0.2);
    --background-primary: rgba(79, 70, 229, 0.07);
    --background-blue: rgb(92, 122, 234, 0.2);
    --background-brown: rgb(197, 104, 36, 0.2);
    --background-dark-light: rgba(0, 0, 0, 0.15);
    --telegram-color: #229ED9;

    --white: #FFF;
    --green: #16BF78;
    --grey-light: #CDD9ED;
    --grey-dark: #3F4656;
    --primary-light: #7699FF;
    --dark: #1C212E;
    --sand-light: #EDD9A9;
    --sand: #DCB773;
  }

  #email.ant-input.ant-input-lg {
    background: transparent !important;
  }

  .sidebar-drawer {
    .ant-drawer-header {
      background: transparent;
    }

    .ant-drawer-content-wrapper {
      box-shadow: none !important;
    }

    .ant-drawer-content {
      background: transparent;
    }
  }

  .card-heading,
  .card-heading--small {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.4rem;
    color: ${(props: ThemeProps) => props?.theme?.colorTextPrimary};
  }

  .card-heading--small {
    font-size: 1.2rem;
    color: var(--color-text);
  }

  .custom-input {
    background-color: var(--color-background-primary) !important;
    border-radius: 0.4rem !important;
    font-weight: 500 !important;
    border: 1px solid transparent !important;
    box-shadow: none !important;
    font-size: 1.5rem !important;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }

    input {
      font-weight: 500 !important;
      font-size: 1.5rem !important;
      background: transparent !important;

      @media only screen and (max-width: 834px) {
        font-size: 1.4rem;
      }

      @media only screen and (max-width: 550px) {
        font-size: 1.3rem;
      }
    }

    &:hover, &:focus {
      border: 1px solid var(--color-primary) !important;
    }

    &[disabled] {
      color: ${(props: ThemeProps) =>
        props?.theme?.colorTextSecondary} !important;
    }
  }

  .custom-form-item {
    margin-bottom: var(--margin-bottom);
  }

  .custom-input-number {
    width: 100% !important;
    background-color: var(--color-background-primary) !important;
    border-radius: 0.4rem !important;
    border: 1px solid transparent !important;
    box-shadow: none !important;
    font-size: 1.5rem !important;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }

    &:hover, &:focus {
      border: 1px solid var(--color-primary) !important;
    }

    &.ant-input-number-disabled {
      background: var(--color-background-gray) !important;

      &:hover, &:focus {
        border: 1px solid transparent!important;
      }
    }
  }

  .custom-date-picker {
    background-color: var(--color-background-primary) !important;
    border-radius: 0.4rem !important;
    outline: none !important;
    border: 1px solid transparent !important;
    
    .ant-picker-input * {
      font-weight: 500 !important;

      @media only screen and (max-width: 834px) {
        font-size: 1.4rem;
      }

      @media only screen and (max-width: 550px) {
        font-size: 1.3rem;
      }
    }
  }

  .custom-select {
    width: 100%;
    font-size: 1.5rem;
    border: 1px solid transparent;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
    
    .ant-select-selector {
      border: 1px solid transparent !important;
      outline: none !important;
      border-radius: 0.4rem !important;
      box-shadow: none !important;
      background-color: var(--color-background-primary) !important;
    }

    &.ant-select-disabled {
      background: var(--color-background-gray) !important;
      border-radius: 0.4rem !important;

      .ant-select-selector {
        background: transparent !important;
      }
    }
  }

  .oauth-signin {
    width: 100%;

    .label {
      display: flex;
      justify-content: center;
      color: white;
      margin-top: 2rem;
      font-size: 1.5rem;
      position: relative;

      @media only screen and (max-width: 834px) {
        font-size: 1.4rem;
      }

      &::after,
      &::before {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        top: 50%;
        background-color: var(--color-gray);
      }

      &::after {
        right: 0;
        width: 40%;
      }

      &::before {
        left: 0;
        width: 40%;
      }
    }

    .button-google {
      margin-top: 2rem;
      width: 100%;
      box-shadow: none !important;
      background-color: rgb(20, 20, 20) !important;
      cursor: pointer;
      display: flex !important;
      justify-content: center !important;
      color: white!important;
      font-family: var(--text-font) !important;
  

      & > div {
        background-color: rgb(20, 20, 20) !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  /* react tour */
  .custom-tour {
    nav {
      flex-wrap: nowrap;
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(0deg);
    }

    70% {
      transform: rotate(-10deg);
    }

    90% {
      transform: rotate(10deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

export { GlobalStyle };
