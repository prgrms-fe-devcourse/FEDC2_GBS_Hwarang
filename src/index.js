import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
