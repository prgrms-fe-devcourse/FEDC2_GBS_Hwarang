import React from "react";
import PropTypes from "prop-types";
// import styled from "@emotion/styled";
import Avatar from "components/Avatar";
import Text from "components/Text";
import IconGroup from "components/IconGroup";
import Icon from "components/Icon";
import * as S from "./UserListItem.style";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  user: PropTypes.instanceOf(Object),
};

const defaultProps = {
  width: "100%",
  user: {},
};

const UserListItem = ({ width, user, ...props }) => {
  const { _id, fullName, image, email, posts, followers } = user;
  const sizeStyle = {
    width,
  };
  const handleonClick = (id) => {
    // TODO: 해당 id를 가진 userPage로 이동
    alert(id);
  };

  return (
    <S.ListItem
      style={sizeStyle}
      onClick={() => {
        handleonClick(_id);
      }}
      {...props}
    >
      <Avatar src={image} style={{ marginRight: 24 }} />
      <S.Container>
        <Text size="$c1" strong>
          {fullName}
        </Text>
        <Text size={12}>{email}</Text>
        <IconGroup top="auto">
          <Icon name="article" fontSize={14} />
          <Text size={12}>{posts.length}</Text>
          <Icon name="person" fontSize={14} />
          <Text size={12}>{followers.length}</Text>
        </IconGroup>
      </S.Container>
    </S.ListItem>
  );
};

UserListItem.propTypes = propTypes;
UserListItem.defaultProps = defaultProps;

export default UserListItem;
