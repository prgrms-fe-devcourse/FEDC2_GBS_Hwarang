import React from "react";
import PropTypes from "prop-types";
import Common from "styles/common";
import { Text } from "components";
import * as S from "./SelectItem.style";

const propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  active: PropTypes.bool,
  text: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  value: null,
  active: false,
  text: null,
  padding: "24px 16px",
  backgroundColor: `${Common.colors.white}`,
  fontSize: "$n1",
};

const SelectItem = ({
  children,
  value,
  active,
  padding,
  backgroundColor,
  fontSize,
  ...props
}) => {
  const itemStyle = {
    padding,
    backgroundColor: `${active ? Common.colors.gray06 : backgroundColor}`,
    cursor: "pointer",
  };

  return (
    <S.Option value={value} active={active} style={itemStyle} {...props}>
      <Text size={fontSize}>{children}</Text>
    </S.Option>
  );
};

SelectItem.propTypes = propTypes;
SelectItem.defaultProps = defaultProps;

export default SelectItem;
