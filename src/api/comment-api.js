import axios from "axios";
import { BASE_URL, CREATE_COMMENT, DELETE_COMMENT } from "./url";

export const addComment = async (comment, postId, token) => {
  if (!token) throw Error("token 정보가 존재하지 않습니다.");

  const res = await axios.post(
    `${BASE_URL}${CREATE_COMMENT}`,
    {
      comment,
      postId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const deleteComment = async (id, token) => {
  if (!token) throw Error("token 정보가 존재하지 않습니다.");

  const res = await axios.delete(`${BASE_URL}${DELETE_COMMENT}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id,
    },
  });

  return res;
};
