import React from "react";
import PropTypes from "prop-types";
import * as S from "./IconGroup.style";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const IconGroup = ({ children }) => {
  return <S.IconGroup>{children}</S.IconGroup>;
};

IconGroup.propTypes = propTypes;

export default IconGroup;
