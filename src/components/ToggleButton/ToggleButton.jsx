import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Text } from "components";
import Common from "styles/common";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  replaceChildren: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  text: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.node,
  ]),
  textColor: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strong: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  replaceChildren: undefined,
  text: "undefined",
  textColor: Common.colors.black01,
  textSize: "$c2",
  strong: false,
  disabled: true,
  onClick: undefined,
  gap: 10,
};

/* 내부 children Required Props
   1. logo
    아이콘 사용 시 : 아이콘 이름, width, height
    이미지 사용 시 : 이미지 src, width, height
    아바타 사용 시 : 이미지 src, size(width, height)
      ---> children으로 node를 받고 크기만 설정해주도록.

  2. Text
    일반 줄글 사용 시 : color, size, strong
    TextNode 사용 시 : 해당 노드에 prop 담겨서 들어옴
      ---> propTypes : string인 경우, Text에 넣어 줌
      ---> propTypes : node인 경우, 그대로 렌더링

  + readonly prop (단순 조회) <bool>
  + onCLick prop (클릭 시 이벤트)
*/

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

const LogoWrapper = styled.div``;

const TextWrapper = styled.div`
  flex-shrink: 1;
`;

const ToggleButton = ({
  children,
  replaceChildren,
  onClick,
  text,
  textColor,
  textSize,
  strong,
  disabled,
  gap,
}) => {
  const [clicked, setClicked] = useState(false);
  const [currentChild, setCurrentChild] = useState(children);

  const WrapperStyle = {
    gap,
  };

  const textStyle = {
    color: textColor,
    fontWeight: strong ? "bold" : undefined,
  };

  const handleClicked = () => {
    onClick();
    setClicked(!clicked);
  };

  useEffect(() => {
    if (!replaceChildren) return;

    if (!clicked) {
      setCurrentChild(children);
      return;
    }

    setCurrentChild(replaceChildren);
  }, [clicked]);

  return (
    <Wrapper onClick={handleClicked} disabled={disabled} style={WrapperStyle}>
      <LogoWrapper>{currentChild}</LogoWrapper>
      <TextWrapper style={textStyle}>
        {typeof text === "string" || typeof text === "number" ? (
          <Text size={textSize}>{text}</Text>
        ) : (
          text
        )}
      </TextWrapper>
    </Wrapper>
  );
};

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
