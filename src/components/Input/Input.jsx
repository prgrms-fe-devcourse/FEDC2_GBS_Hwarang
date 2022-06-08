import React from "react";
import PropTypes from "prop-types";
import * as S from "./Input.style";

function Input({
  width,
  height,
  fontSize,
  label,
  block,
  invalid,
  required,
  disabled,
  readOnly,
  ...props
}) {
  const sizeStyle = {
    width,
    height,
  };
  const fontSizeStyle = {
    fontSize,
  };
  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <S.Wrapper style={sizeStyle} block={block}>
      <S.Label>{label}</S.Label>
      <S.Input
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        style={fontSizeStyle}
        {...props}
      />
    </S.Wrapper>
  );
}

Input.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
  label: PropTypes.string,
  block: PropTypes.bool,
  invalid: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

Input.defaultProps = {
  width: 300,
  height: 50,
  fontSize: 20,
  label: "",
  block: false,
  invalid: false,
  required: false,
  disabled: false,
  readOnly: false,
};

export default Input;
