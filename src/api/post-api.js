import axios from "axios";
import {
  BASE_URL,
  DELETE_POST,
  GET_CHANNELS,
  GET_CHANNEL_BY_NAME,
  GET_POST,
  GET_POSTS,
  UPDATE_POST,
} from "./url";

// 채널 목록
export const getChannels = async () => {
  const res = await axios.get(`${BASE_URL}${GET_CHANNELS}`);
  return res;
};

// 특정 채널 정보
export const getChannelsByName = async (channelName) => {
  const res = await axios.get(
    `${BASE_URL}${GET_CHANNEL_BY_NAME}/${channelName}`
  );
  return res;
};

// 특정 채널의 포스트 목록
export const getPosts = async (channelId, offset, limit) => {
  const res = await axios.get(`${BASE_URL}${GET_POSTS}/${channelId}`, {
    offset,
    limit,
  });
  return res;
};

// post 상세 정보
export const getPost = async (postId) => {
  const res = await axios.post(`${BASE_URL}${GET_POST}/${postId}`);
  return res;
};

// post 수정하기
export const updatePost = async (post, token) => {
  await axios.put(`${BASE_URL}${UPDATE_POST}`, post, {
    headers: {
      Authorization: `${token}`,
    },
  });
};

// post 삭제하기
export const removePost = async (postId, token) => {
  await axios.put(
    `${BASE_URL}${DELETE_POST}`,
    { id: postId },
    {
      headers: {
        Authorization: `${token}`,
      },
    }
  );
};
