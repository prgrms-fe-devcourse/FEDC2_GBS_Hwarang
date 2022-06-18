import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { CookiesProvider } from "react-cookie";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <RecoilRoot>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <App />
    </RecoilRoot>
  </CookiesProvider>
);
