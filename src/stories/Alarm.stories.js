import React from "react";
import Alaram from "components/Alarm";

export default {
  title: "Component/Alarm",
  component: Alaram,
};

export const Default = () => {
  return (
    <div style={{ marginLeft: "300px" }}>
      <Alaram />
    </div>
  );
};
