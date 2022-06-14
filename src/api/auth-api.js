import axios from "axios";
import { AUTH_USER, BASE_URL, LOGIN, LOGOUT, SIGNUP } from "./url";

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
