import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Text } from "components";
import Common from "styles/common";
import S from "./ToggleButton.style";

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
  initialState: PropTypes.bool,
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
  initialState: false,
};

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
  initialState,
}) => {
  const [clicked, setClicked] = useState(initialState);
  const [currentChild, setCurrentChild] = useState(children);

  const WrapperStyle = {
    gap,
    cursor: !disabled ? "pointer" : undefined,
  };

  const textStyle = {
    color: textColor,
    fontWeight: strong ? "bold" : undefined,
  };

  const handleClicked = async () => {
    const response = await onClick();
    if (response) setClicked(!clicked);
  };

  useEffect(() => {
    if (!replaceChildren) return;
    if (!clicked) {
      setCurrentChild(children);
      return;
    }

    setCurrentChild(replaceChildren);
  }, [clicked]);

  useEffect(() => {
    setClicked(initialState);
  }, [initialState]);

  return (
    <S.Wrapper onClick={handleClicked} disabled={disabled} style={WrapperStyle}>
      <div>{currentChild}</div>
      <S.TextWrapper style={textStyle}>
        {typeof text === "string" || typeof text === "number" ? (
          <Text size={textSize} color={textColor}>
            {text}
          </Text>
        ) : (
          text
        )}
      </S.TextWrapper>
    </S.Wrapper>
  );
};

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
