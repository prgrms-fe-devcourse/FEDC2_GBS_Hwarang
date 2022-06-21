import React from "react";
import PropTypes from "prop-types";
import { Image, Input, Icon, ImageUploader, Text } from "components";
import Common from "styles/common";
import useHover from "hooks/useHover";
import S from "./PlanForm.style";
import Textarea from "../Textarea";

const propTypes = {
  plan: PropTypes.instanceOf(Object),
  type: PropTypes.string,
  onChangeHandler: PropTypes.func,
  removePlan: PropTypes.func,
  onImageChange: PropTypes.func,
  removePlanImage: PropTypes.func,
};

const defaultProps = {
  plan: {},
  type: null,
  onChangeHandler: () => {},
  removePlan: () => {},
  onImageChange: () => {},
  removePlanImage: () => {},
};

const PlanForm = ({
  plan,
  type,
  onChangeHandler,
  removePlan,
  onImageChange,
  removePlanImage,
}) => {
  const { _id, image, title, content } = plan;
  const [isHovering, handleMouseEnter, handleMouseLeave] = useHover(
    {
      content: false,
      image: false,
    },
    type
  );

  return (
    <S.Content
      key={_id}
      name="content"
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <S.Dot isHovering={isHovering.content}>
        {isHovering.content && (
          <Icon name="close" onClick={() => removePlan(_id)} />
        )}
      </S.Dot>
      <S.ImageContainer
        name="image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.ImageWrapper>
          <Image
            width="100%"
            height="100%"
            src={image}
            styled={{ borderRadius: 6 }}
          />
        </S.ImageWrapper>
        <S.ButtonWrapper isHovering={isHovering.image}>
          <ImageUploader
            id={_id}
            onChange={onImageChange}
            btnText="사진 업로드"
            useButton
          />
        </S.ButtonWrapper>
        <S.IconWrapper isHovering={isHovering.image}>
          <Icon name="close" onClick={() => removePlanImage(_id)} />
        </S.IconWrapper>
      </S.ImageContainer>
      <S.Info>
        {type === "detail" ? (
          <>
            <S.TextWrapper>
              <Text size="$b1" strong>
                {title}
              </Text>
            </S.TextWrapper>
            <Text size="$c1">{content}</Text>
          </>
        ) : (
          <>
            <Input
              placeholder="여행지 이름을 입력해 주세요."
              initialValue={title}
              onChange={(e) => onChangeHandler(_id, "title", e.target.value)}
              useIcon={false}
              maxLength="30"
              width="100%"
              style={{
                backgroundColor: "transparent",
                border: "none",
                fontSize: `${Common.fontSize.b1}`,
                fontWeight: 600,
                padding: 0,
              }}
            />
            <Textarea
              placeholder="해당 일정에 대해 설명해 주세요!"
              defaultValue={content}
              onChange={(e) => onChangeHandler(_id, "content", e.target.value)}
              maxLength="120"
              height={100}
              backgroundColor="transparent"
            />
          </>
        )}
      </S.Info>
    </S.Content>
  );
};

PlanForm.propTypes = propTypes;
PlanForm.defaultProps = defaultProps;

export default PlanForm;
