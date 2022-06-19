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

export const allData = selector({
  key: "allData",
  get: ({ get }) => {
    const data = get(allPost).map((post) => ({
      ...post,
      comments: post.comments.length,
      likes: post.likes.length,
    }));

    return data;
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

/* postListPage */
export const postList = selector({
  key: "postList",
  get: ({ get }) => {
    // 1. 기본순
    const posts = [...get(allPost)];

    // 2. 인기순
    const popular = [
      ...posts.sort((a, b) => {
        return b.likesNum - a.likesNum;
      }),
    ];
    // 3. 최신순
    const latest = [
      ...posts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      }),
    ];

    // 4. 오래된 순
    const oldest = [
      ...posts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateA.getTime() - dateB.getTime();
      }),
    ];

    // 5. 댓글 많은 순
    const comments = [
      ...posts.sort((a, b) => {
        return b.commentsNum - a.commentsNum;
      }),
    ];

    return {
      all: posts,
      popular,
      latest,
      oldest,
      comments,
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
