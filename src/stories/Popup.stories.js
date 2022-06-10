import React, { useState } from "react";
import { Popup, Button } from "components";

export default {
  title: "Component/Popup",
  component: "Popup",
};

export const LeftPopup = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow((pre) => !pre)}>Click</Button>
      <Popup size="30px" show={show} />
    </div>
  );
};

export const RightPopup = () => {
  return (
    <div>
      <Popup type="right" />
    </div>
  );
};

export const TopPopup = () => {
  return (
    <div>
      <Popup type="top" />
    </div>
  );
};

export const BottomPopup = () => {
  return (
    <div>
      <Popup type="bottom" />
    </div>
  );
};
