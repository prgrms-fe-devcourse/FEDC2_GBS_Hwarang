import { atom, selector } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: null,
});

export const profileImg = selector({
  key: "profileImg",
  get: ({ get }) => {
    const info = get(userInfo);
    if (info && Object.prototype.hasOwnProperty.call(info, "image")) {
      return info.image;
    }
    return "https://mygbs.s3.ap-northeast-2.amazonaws.com/user/Profile_Image.png";
  },
  set: ({ set, get }, newImage) => {
    const prevInfo = get(userInfo);
    const newInfo = { ...prevInfo, image: newImage };
    set(userInfo, newInfo);
  },
});

export const coverImg = selector({
  key: "coverImg",
  get: ({ get }) => {
    const info = get(userInfo);
    if (info && Object.prototype.hasOwnProperty.call(info, "coverImage")) {
      return info.coverImage;
    }
    return "https://mygbs.s3.ap-northeast-2.amazonaws.com/user/Default+Cover+Image.png";
  },
  set: ({ set, get }, newImage) => {
    const prevInfo = get(userInfo);
    const newInfo = { ...prevInfo, coverImage: newImage };
    set(userInfo, newInfo);
  },
});
