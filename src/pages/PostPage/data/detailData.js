const DummyData = {
  likes: [1, 2, 3, 4, 5],
  comments: [
    {
      _id: "commentId1-1",
      comment: "멋져용",
      author: "UserId11",
      post: "postId1",
      createdAt: "2022-06-09",
      updatedAt: "2022-06-09",
    },
    {
      _id: "commentId1-2",
      comment: "멋져용2",
      author: "UserId12",
      post: "postId1",
      createdAt: "2022-06-10",
      updatedAt: "2022-06-10",
    },
    {
      _id: "commentId1-3",
      comment: "멋져용3",
      author: "UserId13",
      post: "postId1",
      createdAt: "2022-06-11",
      updatedAt: "2022-06-11",
    },
    {
      _id: "commentId1-4",
      comment: "멋져용4",
      author: "UserId14",
      post: "postId1",
      createdAt: "2022-06-12",
      updatedAt: "2022-06-12",
    },
    {
      _id: "commentId1-5",
      comment: "멋져용5",
      author: "UserId15",
      post: "postId1",
      createdAt: "2022-06-13",
      updatedAt: "2022-06-13",
    },
  ],
  _id: "postId1",
  image: "https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png",
  imagePublicId: "imgPublicId",
  title:
    '{"title":"멋진 한국의 한옥마을 여행기","plans":[{"_id":1,"image":"https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png","title":"므찌다1","content":"므싯다1"},{"_id":2,"image":"https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png","title":"므찌다2","content":"므싯다2"},{"_id":3,"image":"https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png","title":"므찌다3","content":"므싯다3"},{"_id":4,"image":"https://mygbs.s3.ap-northeast-2.amazonaws.com/backGround.png","title":"므찌다4","content":"므싯다4"}]}',
  channel: {
    authRequired: false, // 사용되지 않음
    posts: [],
    _id: "channelId",
    name: "아시아",
    description: "아시아",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  author: "유용상",
  createdAt: "2022-06-08",
  updatedAt: "2022-06-08",
};
export default DummyData;
