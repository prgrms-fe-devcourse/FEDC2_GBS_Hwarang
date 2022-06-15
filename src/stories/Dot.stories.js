import React from "react";
import Dot from "components/Dot/Dot";

export default {
  title: "Component/Dot",
  component: Dot,
  argTypes: {
    size: { control: "number" },
    color: { control: "color" },
  },
};

export const Default = (args) => {
  return <Dot style={{ top: 0, right: 0 }} {...args} />;
};
