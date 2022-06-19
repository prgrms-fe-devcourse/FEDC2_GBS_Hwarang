import PropTypes from "prop-types";
import React from "react";
import Box from "./Box";

const propTypes = {
  line: PropTypes.number,
};

const defaultProps = {
  line: 2,
};

const Paragraph = ({ line, ...props }) => {
  return (
    <div {...props}>
      {Array.from(Array(line), (_, index) =>
        index !== line - 1 ? (
          <Box width="100%" height={16} key={index} />
        ) : (
          <Box width="64%" height={16} key={index} />
        )
      )}
    </div>
  );
};

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
