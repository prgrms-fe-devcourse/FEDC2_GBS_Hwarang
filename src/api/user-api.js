import axios from "axios";
import {
  BASE_URL,
  GET_ONLINE_USERS,
  GET_USERS,
  UPLOAD_PROFILE,
  UPLOAD_COVER,
  GET_USER_DATA_BY_ID,
  FOLLOW_USER,
  UN_FOLLOW_USER,
} from "./url";

export const getUsers = async (offset, limit) => {
  const res = await axios.get(`${BASE_URL}${GET_USERS}`, {
    offset,
    limit,
  });

  return res;
};

export const getOnlineUsers = async () => {
  const res = await axios.get(`${BASE_URL}${GET_ONLINE_USERS}`);
  return res;
};

export const getUserInfoById = async (id) => {
  if (!id) return {};
  const res = await axios.get(`${BASE_URL}${GET_USER_DATA_BY_ID}/${id}`);
  return res;
};

export const uploadCoverImage = async (file, token) => {
  const res = await axios.post(`${BASE_URL}${UPLOAD_COVER}`, file, {
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
  });
  return res;
};

export const uploadProfileImage = async (file, token) => {
  const res = await axios.post(`${BASE_URL}${UPLOAD_PROFILE}`, file, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
};

/**
 * 팔로우
 * @param {*} id 팔로워 당할 사용자
 * @param {*} token 나
 * @returns Follow model
 */
export const followUser = async (id, token) => {
  if (!id) return {};
  const res = await axios.post(
    `${BASE_URL}${FOLLOW_USER}`,
    {
      userId: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};

export const unFollowUser = async (id, token) => {
  if (!id) return;
  const res = await axios.delete(`${BASE_URL}${UN_FOLLOW_USER}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id,
    },
  });
  return res;
};
