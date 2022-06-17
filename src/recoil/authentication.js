import { selector, atom } from "recoil";
import { getCookie, removeCookie, setCookie } from "../utils/cookie";
import { userAuth } from "../api/auth-api";

export const jwtToken = atom({
  key: "jwtToken",
  default: getCookie("token"),
});

export const loginStatus = atom({
  key: "LoginStatus",
  default: false,
});

export const isTokenExist = selector({
  key: "isTokenExist",
  get: ({ get }) => {
    return !!get(jwtToken);
  },
});

export const loginProcess = selector({
  key: "loginProcess",
  get: ({ get }) => {
    return get(jwtToken);
  },
  set: ({ set }, newValue) => {
    const TOKEN_EXPIRE_TIME = new Date(Date.now() + 60 * 60 * 24 * 1000);

    setCookie("token", newValue, {
      path: "/",
      expires: TOKEN_EXPIRE_TIME,
    });

    set(jwtToken, newValue);
  },
});

export const logoutProcess = selector({
  key: "logoutProcess",
  get: () => {
    return false;
  },
  set: ({ set }) => {
    removeCookie("token"); // 쿠키 삭제(token)
    set(jwtToken, ""); // 쿠키 삭제(jwtToken)
    set(loginStatus, false); // 로그인 상태 초기화
  },
});

export const isUserAuthenticated = selector({
  key: "isUserAuthenticated",
  get: async ({ get }) => {
    const token = get(jwtToken);
    if (token) {
      const res = await userAuth(token);
      if (res.statusText === "OK") {
        return {
          isTokenValid: true,
          userData: res.data,
        };
      }
    }
    return {
      isTokenValid: false,
      userData: null,
    };
  },
});
