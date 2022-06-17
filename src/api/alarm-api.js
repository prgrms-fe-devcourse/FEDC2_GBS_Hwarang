import axios from "axios";

import Alarm from "../mock/alarm.json";
import {
  BASE_URL,
  CREATE_NOTIFICATION,
  //   GET_NOTIFICATION,
  SEEN_NOTIFICATION,
} from "./url";

// 알림 리스트 요청
export const getAlarms = async () => {
  //   const res = await axios.get(`${BASE_URL}${GET_NOTIFICATION}`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  const res = Alarm;

  return res;
};

// 모든 알림 읽음 처리
export const seenAlarm = async () => {
  await axios.get(`${BASE_URL}${SEEN_NOTIFICATION}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// 알림 생성
export const createAlarm = async (type, notiId, userId, postId) => {
  const res = await axios.post(
    `${BASE_URL}${CREATE_NOTIFICATION}`,
    {
      type,
      notiId,
      userId,
      postId,
    },
    {
      header: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
