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
      <Popup show={show} size={300} onClose={() => setShow((pre) => !pre)}>
        Hello World
      </Popup>
    </div>
  );
};

export const RightPopup = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow((pre) => !pre)}>Click</Button>
      <Popup
        show={show}
        size="20%"
        type="right"
        dim
        onClose={() => setShow((pre) => !pre)}
      >
        Hello World
      </Popup>
    </div>
  );
};

export const TopPopup = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow((pre) => !pre)}>Click</Button>
      <Popup
        show={show}
        size="20%"
        type="top"
        onClose={() => setShow((pre) => !pre)}
      >
        Hello World
      </Popup>
    </div>
  );
};

export const BottomPopup = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button onClick={() => setShow((pre) => !pre)}>Click</Button>
      <Popup
        show={show}
        size="20%"
        type="bottom"
        onClose={() => setShow((pre) => !pre)}
      >
        Hello World
      </Popup>
    </div>
  );
};
