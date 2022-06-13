import React from "react";
import UserListItem from "components/InputResult/UserListItem";

export default {
  title: "Component/UserListItem",
  component: UserListItem,
};

export const Default = () => {
  const user = {
    image: "https://picsum.photos/200?1",
    posts: [1, 2, 3, 4, 5],
    followers: [1, 2, 3],
    _id: "1",
    fullName: "yongsang",
    email: "yongsang@gmail.com",
  };
  return <UserListItem user={user} width={300} />;
};
