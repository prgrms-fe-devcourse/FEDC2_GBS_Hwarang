import React from "react";
import { RecoilRoot } from "recoil";
import ImageButton from "pages/UserPage/components/ImageButton";

export default {
  title: "Component/imageButton",
  component: ImageButton,
};

export const ImageButtonExample = () => (
  <RecoilRoot>
    <ImageButton />
  </RecoilRoot>
);
