import { atom } from "recoil";

const userInfo = atom({
  key: "userInfo",
  default: null,
});

export default userInfo;
