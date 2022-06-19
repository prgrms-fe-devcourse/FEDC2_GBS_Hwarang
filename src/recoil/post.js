import { atom, selector, selectorFamily } from "recoil";

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
      let postContent = null;
      try {
        postContent = JSON.parse(post.title);
      } catch (exception) {
        postContent = "test";
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
      isLiked: post.likes.filter((like) => like.user === userId) >= 0,
    }));

    set(postManager, newPosts);
  },
});
