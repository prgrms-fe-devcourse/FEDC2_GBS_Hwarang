import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";
import { Icon, Text } from "components";

const propTypes = {
  children: PropTypes.number,
  iconName: PropTypes.string,
  textSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  justify: PropTypes.string,
};

const defaultProps = {
  children: 10,
  iconName: "favorite",
  textSize: "$b3",
  justify: "end",
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = ({ children, iconName, textSize, justify }) => {
  const buttonStyle = {
    justifyContent: justify,
  };
  return (
    <Wrapper style={buttonStyle}>
      <Icon name={iconName} width={30} height={30} />
      <Text size={textSize}>{children}</Text>
    </Wrapper>
  );
};

ToggleButton.propTypes = propTypes;
ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
