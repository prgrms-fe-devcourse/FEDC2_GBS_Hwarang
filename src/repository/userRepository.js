/**
 * 사용자 정보 관련 respotiroy
 */
// import { getUsers } from "api/user-api";

import { getUsers } from "api/user-api";

// mock data
// import users from "../mock/users.json";

const getAllUsers = async (following, offset, limit) => {
  // const getAllUsers = async (userId) => {
  try {
    // 1. 사용자 리스트 받아오기
    const users = await getUsers(offset, limit);
    // 2. 내가 팔로워하고 있는 사용자인지 확인하는 isFollow flag 추가
    if (users && users.data) {
      const response = users.data.map((user) => {
        return {
          ...user,
          isFollow:
            following.filter((follower) => follower.user === user._id).length >
            0,
        };
      });
      return response;
    }
    return [];
  } catch (exception) {
    console.error(exception);
  }
};
export default getAllUsers;
