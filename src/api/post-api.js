import axios from "axios";
import {
  BASE_URL,
  DELETE_POST,
  // GET_CHANNELS,
  GET_CHANNEL_BY_NAME,
  GET_POST,
  GET_POSTS,
  UPDATE_POST,
  GET_POST_BY_ID,
  CREATE_POST,
  CREATE_LIKE,
  DELETE_LIKE,
} from "./url";

import Channel from "../mock/channel.json";
// import Post from "../mock/posts.json";

// 채널 목록
export const getChannels = async () => {
  // const res = await axios.get(`${BASE_URL}${GET_CHANNELS}`);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  // return res;
  return Channel;
};

// 특정 채널 정보
export const getChannelsByName = async (channelName) => {
  const res = await axios.get(
    `${BASE_URL}${GET_CHANNEL_BY_NAME}/${channelName}`
  );
  return res;
};

// 모든 포스트 목록 요청
export const getAllPosts = async () => {
  const res = await axios.get(`${BASE_URL}${GET_POST}`);
  return res.data ? res.data : res;
};

// 특정 채널의 포스트 목록
export const getPostsByChannel = async (channelId, offset, limit) => {
  const res = await axios.get(`${BASE_URL}${GET_POSTS}/${channelId}`, {
    offset,
    limit,
  });
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  // });
  return res;
  // return Post.filter((post) => post.channel === channeld);
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
      Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getPostByUserId = async (userId, offset = 6, limit = 6) => {
  if (!userId) return []; // 방어 코드
  const res = await axios.get(`${BASE_URL}${GET_POST_BY_ID}/${userId}`, {
    params: {
      offset,
      limit,
    },
  });
  return res;
};

export const createPost = async (post, token) => {
  const res = await axios.post(`${BASE_URL}${CREATE_POST}`, post, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
  return res;
};

/**
 * 특정 포스트 좋아요
 * @param {*} postId 포스트 id
 * @param {*} token 현재 로그인 user의 token
 * @returns Like model
 */
export const setLikePost = async (postId, token) => {
  if (!token) throw Error("token 정보가 올바르지 않습니다.");

  const res = await axios.post(
    `${BASE_URL}${CREATE_LIKE}`,
    {
      postId,
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );

  return res;
};

/**
 * 특정 포스트 좋아요
 * @param {*} likeId 좋아요 Id
 * @param {*} token 현재 로그인 user의 token
 * @returns Like model
 */
export const setUnLikePost = async (likeId, token) => {
  if (!token) throw Error("token 정보가 올바르지 않습니다.");

  console.log(likeId, token);
  const res = await axios.delete(`${BASE_URL}${DELETE_LIKE}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id: likeId,
    },
  });

  return res;
};
