import axios from "axios";
import {
  AUTH_USER,
  BASE_URL,
  LOGIN,
  LOGOUT,
  SIGNUP,
  UPLOAD_PROFILE,
  UPLOAD_COVER,
} from "./url";

export const userLogin = async (email, password) => {
  const res = await axios.post(`${BASE_URL}${LOGIN}`, {
    email,
    password,
  });
  return res;
};

export const userSignUp = async (email, fullName, password) => {
  const res = await axios.post(`${BASE_URL}${SIGNUP}`, {
    email,
    fullName,
    password,
  });
  return res;
};

export const userLogout = async () => {
  await axios.post(`${BASE_URL}${LOGOUT}`);
};

export const userAuth = async (token) => {
  const res = await axios.get(`${BASE_URL}${AUTH_USER}`, {
    headers: {
      Authorization: `${token}`,
    },
  });

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
