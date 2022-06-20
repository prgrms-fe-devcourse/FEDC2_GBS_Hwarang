import React from "react";
import CommentItem from "components/CommentItem/CommentItem";
import { RecoilRoot } from "recoil";

export default {
  title: "Component/CommentItem",
  component: CommentItem,
};

export const Default = () => {
  const comment = {
    author: {
      fullName: "SeomSeom",
      image: "https://picsum.photos/200?2",
    },
    comment: "댓글 남김",
  };
  return (
    <RecoilRoot>
      <CommentItem commentData={comment} />
    </RecoilRoot>
  );
};
