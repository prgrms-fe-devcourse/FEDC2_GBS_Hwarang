import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import * as S from "./Input.style";

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
  icon: PropTypes.string,
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
  icon: "search",
};

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
/* 임시 컴포넌트 */
const Actions = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  padding-right: 20px;
`;
/* 임시 컴포넌트 */
const Icon = styled.span`
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

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
  icon,
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
      <InputWrapper>
        <S.Input
          invalid={invalid}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          style={inputStyle}
          {...props}
        />
        <Actions>
          <Icon className="material-symbols-outlined">{icon}</Icon>
        </Actions>
      </InputWrapper>
    </S.Wrapper>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
