import React from "react";
import PropTypes from "prop-types";
import * as S from "./Input.style";
import Icon from "../Icon";
import IconGroup from "../IconGroup";

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  label: PropTypes.string,
  block: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  useIcon: PropTypes.bool,
  style: PropTypes.instanceOf(Object),
};

const defaultProps = {
  width: 300,
  height: 50,
  fontSize: 14,
  label: "",
  block: false,
  invalid: false,
  required: false,
  disabled: false,
  readOnly: false,
  borderColor: "#ec5e58",
  fontColor: "#ffc2c0",
  useIcon: true,
  style: {},
};

const Input = ({
  width,
  height,
  fontSize,
  label,
  block,
  invalid,
  required,
  disabled,
  readOnly,
  borderColor,
  fontColor,
  useIcon,
  ...props
}) => {
  const wrapperStyle = {
    width,
    height,
    color: fontColor,
    fontSize,
  };
  const inputStyle = {
    border: `1px solid ${borderColor}`,
  };

  return (
    <S.Wrapper style={wrapperStyle} block={block}>
      <S.Label>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          invalid={invalid}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          style={{ ...inputStyle, ...props.style }}
        />
        {useIcon && (
          <IconGroup>
            <Icon />
          </IconGroup>
        )}
      </S.InputWrapper>
    </S.Wrapper>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
