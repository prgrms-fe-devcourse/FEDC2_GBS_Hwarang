import React from "react";
import Comment from "components/Comment/Comment";
import { RecoilRoot } from "recoil";

export default {
  title: "Component/Comment",
  component: Comment,
};

export const Default = () => {
  const comments = [
    {
      _id: 1,
      author: {
        fullName: "SeomSeom",
        image: "https://picsum.photos/200?2",
      },
      comment: "댓글 남김",
    },
    {
      _id: 2,
      author: {
        fullName: "SeomSeom",
        image: "https://picsum.photos/200?2",
      },
      comment: "댓글 남김",
    },
    {
      _id: 3,
      author: {
        fullName: "SeomSeom",
        image: "https://picsum.photos/200?2",
      },
      comment: "댓글 남김",
    },
    {
      _id: 4,
      author: {
        fullName: "SeomSeom",
        image: "https://picsum.photos/200?2",
      },
      comment: "댓글 남김",
    },
  ];

  return (
    <RecoilRoot>
      <Comment postId="postId2" comments={comments} />
    </RecoilRoot>
  );
};
