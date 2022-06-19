import { atom, selector, selectorFamily } from "recoil";
import { userInfo } from "./user";

export const postManager = atom({
  key: "posts",
  default: [],
});

export const allPost = selector({
  key: "allPost",
  get: ({ get }) => {
    const state = get(postManager);
    return state;
  },
  set: ({ set }, newPosts) => {
    const data = newPosts.map((post) => {
      let postContent = post.content;

      if (post.title) {
        try {
          postContent = JSON.parse(post.title);
        } catch (exception) {
          postContent = "test";
        }
      }

      return {
        ...post,
        commentsNum: post.comments.length,
        likesNum: post.likes.length,
        content: postContent,
        title: null,
      };
    });
    set(postManager, data);
  },
});

/* MainPage */
export const mainPost = selector({
  key: "mainPost",
  get: ({ get }) => {
    const posts = [...get(allPost)];
    // 1. 인기순
    const popular = posts
      .sort((a, b) => b.likesNum - a.likesNum)
      .filter((_, index) => index < 6);
    // 2. 최신순
    const latest = posts
      .sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      })
      .filter((_, index) => index < 6);

    return {
      popularPost: popular,
      latestPost: latest,
    };
  },
});

/* MainPage 더보기 버튼 -> postListPage */
export const popularPost = selector({
  key: "popularPost",
  get: ({ get }) => {
    const data = get(allPost).map((post) => ({
      ...post,
      comments: post.comments.length,
      likes: post.likes.length,
    }));

    const popular = data.sort((a, b) => b.likes - a.likes);

    return {
      popularPost: popular,
    };
  },
});

export const latestPost = selector({
  key: "latestPost",
  get: ({ get }) => {
    const data = get(allPost).map((post) => ({
      ...post,
      comments: post.comments.length,
      likes: post.likes.length,
    }));

    const latest = data.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });

    return {
      latestPost: latest,
    };
  },
});

export const postImage = selectorFamily({
  key: "postImage",
  get:
    (postId) =>
    ({ get }) => {
      const data = get(allPost).filter((post) => {
        // eslint-disable-next-line no-underscore-dangle
        return post._id === postId;
      });

      return data.length > 0 && data[0].image ? data[0].image : undefined;
    },
});

// 각 post like 처리
export const setLikePost = selector({
  key: "likePost",
  get: () => {},
  set: ({ set, get }, userId) => {
    const newPosts = get(allPost).map((post) => ({
      ...post,
      isLiked: post.likes.filter((like) => like.user === userId).length > 0,
    }));
    set(postManager, newPosts);
  },
});

// 특정 post의 좋아요 id 요청
export const getLikeId = selectorFamily({
  key: "like",
  get:
    (postId) =>
    // eslint-disable-next-line react/prop-types
    ({ get }) => {
      const userId = get(userInfo)._id;
      const targetPost = get(allPost).filter((post) => post._id === postId);
      const targetLike = targetPost[0].likes.filter(
        (like) => like.user === userId
      );
      return targetLike.length > 0 ? targetLike[0]._id : null;
    },
});

export const addLike = selector({
  key: "setLike",
  get: () => {},
  set: ({ set, get }, { postId, like }) => {
    const posts = [...get(allPost)];
    const targetId = posts.findIndex((post) => post._id === postId);
    const target = {
      ...posts[targetId],
      likes: [...posts[targetId].likes, like],
      isLiked: true,
    };
    posts[targetId] = target;

    set(allPost, posts);
  },
});
export const removeLike = selector({
  key: "removeLike",
  get: () => {},
  set: ({ set, get }, { postId, likeId }) => {
    const posts = [...get(allPost)];
    const targetId = posts.findIndex((post) => post._id === postId);

    const newLike = [...posts[targetId].likes];
    const targetLikeId = newLike.findIndex((like) => like._id === likeId);
    newLike.splice(targetLikeId, 1);
    const target = {
      ...posts[targetId],
      likes: newLike,
      isLiked: false,
    };
    posts[targetId] = target;
    set(allPost, posts);
  },
});
