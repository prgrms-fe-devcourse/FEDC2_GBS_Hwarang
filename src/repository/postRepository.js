/**
 * Post 관련 repository
 */

import { getChannels, getPosts } from "api/post-api";

/**
 * 메인 페이지에서 사용되는 인기 순, 최신 순 게시글 요청
 */
export default getAllPost = async () => {
  try {
    const channelResponse = await getChannels();
    if (channelResponse.data) {
      const postByChannel = await Promise.all(
        // eslint-disable-next-line no-underscore-dangle
        channelResponse.data.map((channel) => getPosts(channel._id))
      );
      const posts = channelResponse.data.map((channel, index) => ({
        ...channel,
        posts: postByChannel[index],
      }));
      return posts;
    }
  } catch (exception) {
    console.error(exception);
  }
};
