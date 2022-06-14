import axios from "axios";
import { BASE_URL, GET_ONLINE_USERS, GET_USERS } from "./url";

export const getUsers = async (offset, limit) => {
  const res = await axios.get(`${BASE_URL}${GET_USERS}`, {
    offset,
    limit,
  });

  return res;
};

export const getOnlineUsers = async () => {
  const res = await axios.get(`${BASE_URL}${GET_ONLINE_USERS}`);
  return res;
};
