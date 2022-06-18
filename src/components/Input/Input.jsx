<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import * as S from "./Input.style";
import Icon from "../Icon";
import IconGroup from "../IconGroup";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
  isFileUploadInput: PropTypes.bool,
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
  isFileUploadInput: false,
};

const Input = React.forwardRef(
  (
    {
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
      isFileUploadInput,
      ...props
    },
    ref
  ) => {
    const wrapperStyle = {
      width,
      height,
      color: fontColor,
      fontSize,
      display: isFileUploadInput ? "none" : "block",
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
            style={{ ...inputStyle }}
            {...props}
            ref={ref}
          />
          {useIcon && (
            <IconGroup>
              <Icon />
            </IconGroup>
          )}
        </S.InputWrapper>
      </S.Wrapper>
    );
  }
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
=======
import * as S from './Input.style.js';

const Input = ({}) => {
  return (
    <div></div>
  )
}

export default Input;
>>>>>>> 3bb8e6b (pick feat: Input 컴포넌트 베이스코드를 생성했다)
