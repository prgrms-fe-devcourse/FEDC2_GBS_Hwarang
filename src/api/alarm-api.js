import axios from "axios";
import {
  BASE_URL,
  CREATE_NOTIFICATION,
  GET_NOTIFICATION,
  SEEN_NOTIFICATION,
} from "./url";

// 알림 리스트 요청
export const getAlarms = async (token) => {
  const res = await axios.get(`${BASE_URL}${GET_NOTIFICATION}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

// 모든 알림 읽음 처리
export const seenAlarm = async (token) => {
  await axios.put(
    `${BASE_URL}${SEEN_NOTIFICATION}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// 알림 생성
export const createAlarm = async (type, notiId, userId, postId, token) => {
  const res = await axios.post(
    `${BASE_URL}${CREATE_NOTIFICATION}`,
    {
      notificationType: type,
      notificationTypeId: notiId,
      userId,
      postId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
