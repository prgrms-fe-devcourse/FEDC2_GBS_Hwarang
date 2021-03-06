const DummyData = [
  {
    likes: [
      {
        _id: "likeId1-1",
        user: "UserId100", // 사용자 id
        post: "postId1", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId1-1",
        comment: "멋져용",
        author: "UserId11",
        post: "postId1", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId1",
    image:
      "https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg",
    imagePublicId: "imgPublicId",
    title: "멋진 한국의 한옥마을 여행기",
    channel: "한국",
    author: "User1",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId2-1",
        user: "UserId200", // 사용자 id
        post: "postId2", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId2-1",
        comment: "멋져용",
        author: "UserId21",
        post: "postId2", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId2",
    image:
      "https://mediahub.seoul.go.kr/wp-content/uploads/editor/images/000564/P1060596-%ED%8E%B8%EC%A7%91.jpg",
    imagePublicId: "imgPublicId",
    title: "한국의 명동은 참 좋아요",
    channel: "한국",
    author: "User2",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId3-1",
        user: "UserId300", // 사용자 id
        post: "postId3", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    comments: [
      {
        _id: "commentId3-1",
        comment: "남산타워 등산 해보신분?",
        author: "UserId31",
        post: "postId3", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId3",
    image:
      "https://50plus.or.kr/upload/im/2020/07/69e4299c-7f5a-4643-ab02-37aa0643f80d.jpg",
    imagePublicId: "imgPublicId",
    title: "남산타워",
    channel: "한국",
    author: "User3",
    createdAt: "2022-06-05",
    updatedAt: "2022-06-05",
  },
  {
    likes: [
      {
        _id: "likeId4-1",
        user: "UserId400", // 사용자 id
        post: "postId4", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId4-1",
        comment: "멋져요오오",
        author: "UserId41",
        post: "postId4", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId4",
    image:
      "https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201802/01/cb3c5898-4cbf-43d1-8b68-3a3d70c985c7.jpg",
    imagePublicId: "imgPublicId",
    title: "시원한 강릉 바다",
    channel: "한국",
    author: "User4",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId5-1",
        user: "UserId500", // 사용자 id
        post: "postId5", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId5-1",
        comment: "멋져용",
        author: "UserId51",
        post: "postId5", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId5",
    image: "https://t1.daumcdn.net/cfile/tistory/9915E7455CECF2EB38",
    imagePublicId: "imgPublicId",
    title: "가족들과 함께한 속초 여행",
    channel: "한국",
    author: "User5",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId6-1",
        user: "UserId600", // 사용자 id
        post: "postId6", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId6-1",
        comment: "멋져용",
        author: "UserId61",
        post: "postId6", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId6",
    image:
      "https://mblogthumb-phinf.pstatic.net/MjAxOTEyMjJfMTc1/MDAxNTc2OTUwOTg5NzQw.W8W1ftkZfZoKF_iP1tbnZ1MQEHhvXLPvtsBNtkrXZXQg.6NU5hTSJuosBLGiduMuSkGy1s1-1CxReuwLHXEtljnEg.JPEG.font21/R0019810.JPG?type=w800",
    imagePublicId: "imgPublicId",
    title: "오이도 조개구이가 맛있어요.",
    channel: "한국",
    author: "User6",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId7-1",
        user: "UserId700", // 사용자 id
        post: "postId7", // 포스트 id
        createdAt: "2022-06-12",
        updatedAt: "2022-06-12",
      },
    ],
    comments: [
      {
        _id: "commentId7-1",
        comment: "멋져용",
        author: "UserId71",
        post: "postId7", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId7",
    image: "https://img.hankyung.com/photo/201809/AA.17827365.1.jpg",
    imagePublicId: "imgPublicId",
    title: "해남 땅끝마을 방문기",
    channel: "한국",
    author: "User7",
    createdAt: "2022-06-11",
    updatedAt: "2022-06-11",
  },
  {
    likes: [
      {
        _id: "likeId8-1",
        user: "UserId800", // 사용자 id
        post: "postId8", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId8-1",
        comment: "멋져용",
        author: "UserId81",
        post: "postId8", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId8",
    image: "https://t1.daumcdn.net/cfile/tistory/990374445C3830C032",
    imagePublicId: "imgPublicId",
    title: "한국에서 작은 중국을 경험할 수 있다?",
    channel: "한국",
    author: "User8",
    createdAt: "2022-06-09",
    updatedAt: "2022-06-09",
  },
  {
    likes: [
      {
        _id: "likeId9-1",
        user: "UserId900", // 사용자 id
        post: "postId9", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId9-1",
        comment: "멋져용",
        author: "UserId91",
        post: "postId9", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId9",
    image:
      "https://post-phinf.pstatic.net/MjAyMDA5MjJfMjUw/MDAxNjAwNzYwNjU5NzM3.5gVw1WtTwHX11efyd905LyyC5t9Fj_WHqnWJ-sKMonwg.xda6ivv5MRVpSPEdoho99iTM30StgSm9ONTfZP3GH8og.JPEG/dcac7be6-cdfe-34b4-eed8-432a5a094e1a-1000.jpg?type=w1200",
    imagePublicId: "imgPublicId",
    title: "가평 글램핑장 추천",
    channel: "한국",
    author: "User9",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId10-1",
        user: "UserId1000", // 사용자 id
        post: "postId10", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId10-1",
        comment: "멋져용",
        author: "UserId101",
        post: "postId10", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId10",
    image:
      "https://www.yongpyong.co.kr/images/kor/skiNboard/img_yongpyongski07.png",
    imagePublicId: "imgPublicId",
    title: "1박 2일 스키장 코스",
    channel: "한국",
    author: "User10",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
  {
    likes: [
      {
        _id: "likeId11-1",
        user: "UserId1100", // 사용자 id
        post: "postId11", // 포스트 id
        createdAt: "2022-06-10",
        updatedAt: "2022-06-10",
      },
    ],
    comments: [
      {
        _id: "commentId11-1",
        comment: "멋져용",
        author: "UserId111",
        post: "postId11", // 포스트 id
        createdAt: "2022-06-09",
        updatedAt: "2022-06-09",
      },
    ],
    _id: "postId11",
    image:
      "https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_533475_16226191374667420.png",
    imagePublicId: "imgPublicId",
    title: "오션월드로 떠나요",
    channel: "한국",
    author: "User11",
    createdAt: "2022-06-08",
    updatedAt: "2022-06-08",
  },
];

export default DummyData;
