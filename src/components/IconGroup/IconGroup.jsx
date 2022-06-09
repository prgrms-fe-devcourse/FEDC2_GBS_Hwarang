import React from "react";
import PropTypes from "prop-types";
import * as S from "./IconGroup.style";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const Input = ({ children, ...props }) => {
  return <S.IconGroup {...props}>{children}</S.IconGroup>;
};

Input.propTypes = propTypes;

export default Input;
