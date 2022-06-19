import React from "react";
import PropTypes from "prop-types";
import { ImageUploader, Text, Input, ToggleButton, Image } from "components";
import likesSvg from "assets/likes.svg";
import likesClickedSvg from "assets/likes_clicked.svg";
import commentSvg from "assets/comment.svg";
import Common from "styles/common";
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
};

const defaultProps = {
  type: null,
  isHovering: null,
  onImageChange: () => {},
  post: null,
  onChangeHandler: () => {},
  channels: null,
};

const ImageInner = ({
  type,
  isHovering,
  onImageChange,
  post,
  onChangeHandler,
  channels,
}) => {
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
      {type === "detail" ? (
        <S.InnerWrapper position="left">
          <Text color="$white">{post.title}</Text>
        </S.InnerWrapper>
      ) : (
        <S.InnerWrapper position="left">
          <Input
            placeholder="일정 제목을 입력해주세요"
            defaultValue={post.title || null}
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
        </S.InnerWrapper>
      )}
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
              text={post.likes.length}
            >
              <Image src={likesSvg} width={20} height={20} mode="contain" />
            </ToggleButton>
            <ToggleButton
              textSize="$c1"
              textColor="white"
              text={post.comments.length}
            >
              <Image src={commentSvg} width={20} height={20} />
            </ToggleButton>
          </div>
        ) : (
          <Select channelId={post.channelId} onChangeHandler={onChangeHandler}>
            {channels &&
              channels.map((channel) => (
                <Option key={channel._id} value={channel.name} id={channel._id}>
                  {channel.name}
                </Option>
              ))}
          </Select>
        )}
      </S.InnerWrapper>
    </>
  );
};

ImageInner.propTypes = propTypes;
ImageInner.defaultProps = defaultProps;

export default ImageInner;
