import React from "react";
import Alaram from "components/Alarm";
import { RecoilRoot } from "recoil";

export default {
  title: "Component/Alarm",
  component: Alaram,
};

export const Default = () => {
  return (
    <RecoilRoot>
      <div style={{ marginLeft: "300px" }}>
        <Alaram />
      </div>
    </RecoilRoot>
  );
};
