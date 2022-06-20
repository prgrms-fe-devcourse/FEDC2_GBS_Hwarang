import React, { useEffect, useState } from "react";
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
  onChange: PropTypes.func,
  initialValue: PropTypes.string,
  onSearch: PropTypes.func,
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
  onChange: null,
  initialValue: "",
  onSearch: null,
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
      onChange,
      onSearch,
      initialValue,
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
    const [keyword, setKeyword] = useState(initialValue);

    const handleOnChange = (e) => {
      setKeyword(e.target.value);
      onChange(e);
    };
    const handleOnSearch = () => {
      if (onSearch && keyword !== "") onSearch(keyword);
    };

    useEffect(() => {
      function handleKeyDown(e) {
        if (e.key === "Enter") {
          handleOnSearch();
        }
      }

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [handleOnSearch]);

    useEffect(() => {
      setKeyword(initialValue);
    }, [initialValue]);

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
            value={keyword}
            onChange={handleOnChange}
          />
          {useIcon && (
            <IconGroup>
              <Icon onClick={handleOnSearch} />
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
