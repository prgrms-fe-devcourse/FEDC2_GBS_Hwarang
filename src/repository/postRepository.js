/**
 * Post 관련 repository
 */

import { getChannels, getPosts } from "api/post-api";

/**
 * 모든 post 요청
 */
const getAllPost = async () => {
  try {
    // 1. 채널 리스트 요청
    const channelResponse = await getChannels();
    if (channelResponse && channelResponse.data) {
      const postByChannel = await Promise.all(
        // 각 채널별 post 요청
        channelResponse.data.map((channel) => getPosts(channel._id))
      );
      // { 채널 이름: 채널 정보 + 포스트 정보 } 객체 변환
      const posts = channelResponse.data.reduce(
        (result, channel, index) => ({
          ...result,
          [channel.name]: { ...channel, posts: postByChannel[index] },
        }),
        {}
      );
      return posts;
    }
  } catch (exception) {
    console.error(exception);
  }
};
export default getAllPost;
