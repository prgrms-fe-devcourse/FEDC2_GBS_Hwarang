import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setCookie = (key, value, options) => {
  return cookie.set(key, value, { ...options });
};

export const getCookie = (key) => {
  return cookie.get(key);
};

export const removeCookie = (key) => {
  cookie.remove(key);
};
