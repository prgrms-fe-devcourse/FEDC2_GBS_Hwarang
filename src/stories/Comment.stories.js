import React from "react";
import Comment from "components/CommentItem/CommentItem";
import { RecoilRoot } from "recoil";

export default {
  title: "Component/Comment",
  component: Comment,
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
      <Comment commentData={comment} />
    </RecoilRoot>
  );
};
