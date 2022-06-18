import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Avatar from "components/Avatar";
import Text from "components/Text";
import IconGroup from "components/IconGroup";
import Icon from "components/Icon";
import Image from "components/Image";
import Dot from "components/Dot/Dot";
import likesClickedSvg from "assets/likes_clicked.svg";
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
  const navigate = useNavigate();
  const { _id, fullName, image, email, posts, followers, isOnline, isFollow } =
    user;
  const sizeStyle = {
    width,
  };
  const handleonClick = (id) => {
    // TODO: 해당 id를 가진 userPage로 이동
    navigate(`/userpage/${id}`);
  };

  return (
    <S.ListItem
      style={sizeStyle}
      onClick={() => {
        handleonClick(_id);
      }}
      {...props}
    >
      <div style={{ position: "relative", marginRight: 24 }}>
        <Avatar src={image} />
        {isFollow && (
          <Image
            src={likesClickedSvg}
            width={25}
            height={25}
            mode="contain"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        )}
      </div>
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
        {isOnline && (
          <Dot
            size={10}
            color="#53bf9d"
            style={{ top: 0, right: 0, margin: "14px" }}
          />
        )}
      </S.Container>
    </S.ListItem>
  );
};

UserListItem.propTypes = propTypes;
UserListItem.defaultProps = defaultProps;

export default UserListItem;
