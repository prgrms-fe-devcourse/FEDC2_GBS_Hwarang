import axios from "axios";
import { BASE_URL, CREATE_COMMENT, DELETE_COMMENT } from "./url";

export const createComment = async (payload, token) => {
  if (!payload || !payload.postId) return;
  const res = await axios.post(
    `${BASE_URL}${CREATE_COMMENT}`,
    {
      ...payload,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const deleteComment = async (commentId, token) => {
  if (!commentId) return;
  const res = await axios.delete(`${BASE_URL}${DELETE_COMMENT}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id: commentId,
    },
  });
  return res;
};
