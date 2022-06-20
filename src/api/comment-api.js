import axios from "axios";
import { createAlarm } from "./alarm-api";
import { BASE_URL, CREATE_COMMENT, DELETE_COMMENT } from "./url";

export const addComment = async (comment, postId, userId, token) => {
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

  // 댓글 작성 성공 시, 알림 생성
  await createAlarm("COMMENT", res.data._id, userId, postId, token);
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
