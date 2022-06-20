import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ImageUploader,
  Text,
  Input,
  ToggleButton,
  Image,
  Icon,
} from "components";
import likesSvg from "assets/likes.svg";
import likesClickedSvg from "assets/likes_clicked.svg";
import commentSvg from "assets/comment.svg";
import Common from "styles/common";
import { useNavigate } from "react-router-dom";
import { removePost } from "api/post-api";
import Option from "../SelectItem";
import Select from "../Select";
import S from "../../PostPage.style";

const propTypes = {
  type: PropTypes.string,
  isHovering: PropTypes.instanceOf(Object),
  onImageChange: PropTypes.func,
  post: PropTypes.instanceOf(Object),
  onChangeHandler: PropTypes.func,
  channels: PropTypes.instanceOf(Array),
  userId: PropTypes.string,
  token: PropTypes.string,
};

const defaultProps = {
  type: null,
  isHovering: null,
  onImageChange: () => {},
  post: null,
  onChangeHandler: () => {},
  channels: null,
  userId: null,
  token: null,
};

const ImageInner = ({
  type,
  isHovering,
  onImageChange,
  post,
  onChangeHandler,
  channels,
  userId,
  token,
}) => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const postId = post._id;
  const authorId = post.author?._id;
  const handleOnClick = () => {
    setVisible(!visible);
  };

  const editPost = () => {
    navigate(`/post/edit/${postId}`);
  };

  const deletePost = async () => {
    console.log(post);
    console.log(postId);
    console.log(token);
    const res = await removePost(postId, token);
    console.log(res);
  };

  return (
    <>
      {type !== "detail" && (
        <S.ButtonWrapper isHovering={isHovering.image}>
          <ImageUploader
            onChange={onImageChange}
            width={200}
            height={60}
            backgroundColor="$white"
            color="$main"
            btnText="대표 사진 업로드"
            borderRadius={6}
            border
            useButton
          />
        </S.ButtonWrapper>
      )}
      <S.InnerWrapper position="left">
        {type === "detail" ? (
          <Text color="$white">{post?.title}</Text>
        ) : (
          <Input
            placeholder="일정 제목을 입력해주세요"
            defaultValue={post?.title || null}
            onChange={(e) => onChangeHandler(null, "title", e.target.value)}
            width={500}
            useIcon={false}
            style={{
              backgroundColor: "transparent",
              border: "none",
              fontSize: 40,
              fontWeight: 600,
              color: `${Common.colors.gray04}`,
            }}
          />
        )}
      </S.InnerWrapper>
      <S.InnerWrapper position="right">
        {type === "detail" ? (
          <div style={{ display: "flex" }}>
            <ToggleButton
              disabled={false}
              onClick={() => {
                console.log("Clicked!");
              }}
              replaceChildren={
                <Image
                  src={likesClickedSvg}
                  width={20}
                  height={20}
                  mode="contain"
                />
              }
              textSize="$c1"
              textColor="white"
              text={post?.likes?.length}
            >
              <Image src={likesSvg} width={20} height={20} mode="contain" />
            </ToggleButton>
            <ToggleButton
              textSize="$c1"
              textColor="white"
              text={post?.comments?.length}
            >
              <Image src={commentSvg} width={20} height={20} />
            </ToggleButton>
          </div>
        ) : (
          <Select channelId={post?.channelId} onChangeHandler={onChangeHandler}>
            {channels &&
              channels.map((channel) => (
                <Option key={channel._id} value={channel.name} id={channel._id}>
                  {channel.name}
                </Option>
              ))}
          </Select>
        )}
      </S.InnerWrapper>
      {type === "detail" && authorId === userId && (
        <>
          <S.IconWrapper>
            <Icon
              name="more_vert"
              style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              onClick={handleOnClick}
            />
          </S.IconWrapper>
          <S.List visible={visible}>
            <S.Item onClick={editPost}>
              <Text size="$c1" style={{ marginRight: 10 }}>
                수정하기
              </Text>
              <Icon name="edit" />
            </S.Item>
            <S.Item last onClick={deletePost}>
              <Text
                size="$c1"
                color="rgb(212, 55, 55)"
                style={{ marginRight: 10 }}
              >
                삭제하기
              </Text>
              <Icon
                name="delete"
                style={{ color: "rgb(212, 55, 55)", fontSize: 20 }}
              />
            </S.Item>
          </S.List>
        </>
      )}
    </>
  );
};

ImageInner.propTypes = propTypes;
ImageInner.defaultProps = defaultProps;

export default ImageInner;
