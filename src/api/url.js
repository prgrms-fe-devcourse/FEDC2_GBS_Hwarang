// base
export const BASE_URL = "https://kdt.frontend.2nd.programmers.co.kr:5012";

// authentication
export const LOGIN = "/login";
export const SIGNUP = "/signup";
export const LOGOUT = "/logout";
export const AUTH_USER = "/auth-user";

// user
export const GET_USERS = "/users/get-users";
export const GET_USER_DATA_BY_ID = "/users";
export const GET_ONLINE_USERS = "/users/online-users";
export const UPLOAD_PROFILE = "/users/upload-photo";
export const UPLOAD_COVER = "/users/upload-photo";
export const FOLLOW_USER = "/follow/create";
export const UN_FOLLOW_USER = "/follow/delete";

// 사용자 정보 변경
export const UPDATE_USER = "/settings/update-user";
export const UPDATE_PASSWORD = "/settings/update-password";

// 채널
export const GET_CHANNELS = "/channels";
export const GET_CHANNEL_BY_NAME = "/channel";

// POST
export const GET_POSTS = "/posts/channels";
export const CREATE_POST = "/posts/create";
export const GET_POST = "/posts";
export const UPDATE_POST = "/posts/update";
export const DELETE_POST = "/posts/delete";
export const GET_POST_BY_ID = "/posts/author";

// search
export const SEARCH_USER = "/search/users";
export const SEARCH_POST = "/search/all";

// 좋아요
export const CREATE_LIKE = "/likes/create";
export const DELETE_LIKE = "/likes/delete";

// 댓글
export const CREATE_COMMENT = "/comments/create";
export const DELETE_COMMENT = "/comments/delete";

// 알림
export const GET_NOTIFICATION = "/notifications";
export const SEEN_NOTIFICATION = "/notifications/seen";
export const CREATE_NOTIFICATION = "/notifications/create";

// 팔로우
export const CREATE_FOLLOW = "/follow/create";
export const DELETE_FOLLOW = "/follow/delete";

// 메세지
export const GET_CONVERSATION = "/messages/conversations";
export const GET_MESSAGES = "/messages";
export const CREATE_MESSAGES = "/messages/create";
export const SEEN_MESSAGES = "/messages/update-seen";

// 공통 default url
export const DEFAULT_COVER_IMAGE =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/user/Default+Cover+Image.png";
export const DEFAULT_PROFILE_IMAGE =
  "https://mygbs.s3.ap-northeast-2.amazonaws.com/user/Profile_Image.png";
