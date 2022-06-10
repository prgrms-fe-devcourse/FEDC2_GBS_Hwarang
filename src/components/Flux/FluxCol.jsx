import PropTypes from "prop-types";
import React, { useMemo } from "react";
import S from "./Flux.style";
import { useFlux } from "./FluxProvider";

const propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.number,
  offset: PropTypes.number,
};

const defaultProps = {
  span: 4,
  offset: 10,
};

const FluxCol = ({ children, span, offset }) => {
  const StyleCol = {
    width: span && `${(span / 12) * 100}%`,
    marginLeft: offset && `${(offset / 12) * 100} %`,
  };

  const { gutter } = useFlux();
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        paddingTop: `${verticalGutter / 2}px`,
        paddingBottom: `${verticalGutter / 2}px`,
        paddingLeft: `${horizontalGutter / 2}px`,
        paddingRight: `${horizontalGutter / 2}px`,
      };
    }
    return {
      paddingLeft: `${gutter / 2}px`,
      paddingRight: `${gutter / 2}px`,
    };
  }, [gutter]);

  return (
    <S.Col span={span} offset={offset} style={{ ...StyleCol, ...gutterStyle }}>
      {children}
    </S.Col>
  );
};

FluxCol.propTypes = propTypes;
FluxCol.defaultProps = defaultProps;

export default FluxCol;
