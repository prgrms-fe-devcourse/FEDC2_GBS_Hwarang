import { atom, selector } from "recoil";
import { getAlarms } from "api/alarm-api";
import { getCookie } from "utils/cookie";
import { jwtToken } from "./authentication";

// eslint-disable-next-line
export const unSeenNotifications = atom({
  key: "unSeenNotifications",
  default: selector({
    key: "unSeenNotifications/Default",
    get: async ({ get }) => {
      const token = get(jwtToken) || getCookie("token");
      if (!token) return [];
      const res = await getAlarms(token);
      return res.data;
    },
  }),
});
