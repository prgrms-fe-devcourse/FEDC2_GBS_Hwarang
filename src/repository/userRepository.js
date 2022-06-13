/**
 * 사용자 정보 관련 respotiroy
 */

import { getUsers } from "api/user-api";

const getAllUsers = async (offset, limit) => {
  try {
    // 1. 사용자 리스트 받아오기
    const users = await getUsers(offset, limit);
    return users.data;
  } catch (exception) {
    console.error(exception);
  }
};
export default getAllUsers;
