import axios from "axios";
import {
  BASE_URL,
  GET_ONLINE_USERS,
  GET_USERS,
  UPLOAD_PROFILE,
  UPLOAD_COVER,
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
