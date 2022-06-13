/**
 * 사용자 정보 관련 respotiroy
 */
// import { getUsers } from "api/user-api";

// mock data
import users from "../mock/users.json";

// const getAllUsers = async (offset, limit) => {
const getAllUsers = async () => {
  try {
    // 1. 사용자 리스트 받아오기
    // const users = await getUsers(offset, limit);
    // 2. 내가 팔로워하고 있는 사용자인지 확인하는 isFollow flag 추가
    const response = users.map((user) => {
      // eslint-disable-next-line no-underscore-dangle
      const followers = user.followers.map((follower) => follower._id);
      return {
        ...user,
        isFollow: followers.includes("62a5f647d298d0396d7e756c"),
      };
    });
    return response;
  } catch (exception) {
    console.error(exception);
  }
};
export default getAllUsers;
