import React from "react";
import CommentInput from "components/CommentInput/CommentInput";
import { RecoilRoot } from "recoil";

export default {
  title: "Component/CommentInput",
  component: CommentInput,
};

export const Default = () => {
  return (
    <RecoilRoot>
      <CommentInput />
    </RecoilRoot>
  );
};
