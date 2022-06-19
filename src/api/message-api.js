import axios from "axios";
import { BASE_URL, GET_MESSAGES, GET_CONVERSATION } from "./url";

export const getMessagesByUserId = async (userId, token) => {
  const res = await axios.get(`${BASE_URL}${GET_MESSAGES}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      userId,
    },
  });
  return res;
};

export const getAllMessage = async (token) => {
  const res = await axios.get(`${BASE_URL}${GET_CONVERSATION}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
