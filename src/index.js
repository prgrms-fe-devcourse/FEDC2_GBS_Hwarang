import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CookiesProvider>
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  </CookiesProvider>
);
