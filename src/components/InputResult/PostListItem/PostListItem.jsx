import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Image, Text } from "components";
import { DEFAULT_COVER_IMAGE } from "api/url";
import * as S from "./PostListItem.style";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  post: PropTypes.instanceOf(Object),
};

const defaultProps = {
  width: null,
  post: {},
};

const PostListItem = ({ width, post, ...props }) => {
  const { _id } = post;
  const navigate = useNavigate();
  const sizeStyle = {
    width,
  };
  const handleOnClick = () => {
    // TODO: 해당 id를 가진 post로 이동
    navigate(`/post/detail/${_id}`);
  };

  return (
    <S.ListItem style={sizeStyle} onClick={handleOnClick} {...props}>
      <div>
        <Text size="$c1" strong>
          {post.title}
        </Text>
      </div>
      <Image
        src={post.image || DEFAULT_COVER_IMAGE}
        width="110px"
        height={post.image ? "auto" : "75px"}
        mode={post.image ? "contain" : "cover"}
        style={{ marginRight: 10, borderRadius: 5 }}
      />
    </S.ListItem>
  );
};

PostListItem.propTypes = propTypes;
PostListItem.defaultProps = defaultProps;

export default PostListItem;
