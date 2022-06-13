import { Text } from "components";
import PropTypes from "prop-types";
import React from "react";
import S from "./PostList.style";
import PostListItem from "./PostListItem";

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

const PostList = ({ data }) => {
  return (
    <S.PostListWrapper>
      <Text>검색 결과</Text>
      {data.map((post) => {
        const { _id, image, title, author, createdAt, likes, comments } = post;
        return (
          <S.PostListItemWrapper key={_id}>
            <PostListItem
              src={image}
              title={title}
              author={author}
              createdAt={createdAt}
              likesNum={likes.length}
              commentsNum={comments.length}
            />
          </S.PostListItemWrapper>
        );
      })}
    </S.PostListWrapper>
  );
};

PostList.propTypes = propTypes;

export default PostList;
