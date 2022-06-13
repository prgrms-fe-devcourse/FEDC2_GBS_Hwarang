/**
 * 사용자 정보 관련 respotiroy
 */

import { getOnlineUsers, getUsers } from "api/user-api";

const getAllUsers = async (offset, limit) => {
  try {
    // 1. 사용자 리스트 받아오기
    const users = await getUsers(offset, limit);
    // 2. 현재 온라인에 접속중인 사용자 리스트 받아오기
    const onlineUsers = await getOnlineUsers();
    // eslint-disable-next-line no-underscore-dangle
    const onlineUsersId = onlineUsers.map((onlineUser) => onlineUser._id);

    const response = users.map((user) => {
      // eslint-disable-next-line no-underscore-dangle
      return { ...user, isOnline: user._id in onlineUsersId };
    });
    return response;
  } catch (exception) {
    console.error(exception);
  }
};
export default getAllUsers;
