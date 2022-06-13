import Flux from "components/Flux";
import { Image, Text } from "components";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

const PostListWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 1px solid;
`;

const PostListItemWrapper = styled.div`
  border: 1px solid;
`;

const PostList = ({ data }) => {
  const { FluxRow, FluxCol } = Flux;
  return (
    <PostListWrapper>
      <Text>검색 결과</Text>
      {data.map((post) => {
        const { _id, image, title, author, createdAt, likes, comments } = post;
        return (
          <PostListItemWrapper>
            <FluxRow key={_id}>
              <FluxCol span={4}>
                <Image src={image} />
              </FluxCol>
              <FluxCol span={8}>
                <Text>{title}</Text>
              </FluxCol>
            </FluxRow>
            <Text>
              {author}, {createdAt} , {likes.length}, {comments.length}
            </Text>
          </PostListItemWrapper>
        );
      })}
    </PostListWrapper>
  );
};

PostList.propTypes = propTypes;

export default PostList;
