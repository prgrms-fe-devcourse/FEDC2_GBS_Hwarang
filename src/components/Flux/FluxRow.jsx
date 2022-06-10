import PropTypes from "prop-types";
import React, { useMemo } from "react";
import S from "./Flux.style";
import FluxProvider from "./FluxProvider";

const AlignToCssValue = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  justify: "top",
  align: "middle",
  gutter: 0,
  padding: 0,
};

const FluxRow = ({ children, justify, align, gutter, padding }) => {
  const StyleRow = {
    justifyContent: justify,
    alignItems: AlignToCssValue[align],
    padding,
  };

  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0];
      const verticalGutter = gutter[1];
      return {
        marginTop: `-${verticalGutter / 2}px`,
        marginBottom: `-${verticalGutter / 2}px`,
        marginLeft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
      };
    }
    return {
      marginLeft: `-${gutter / 2}px`,
      marginRight: `-${gutter / 2}px`,
    };
  }, [gutter]);

  return (
    <FluxProvider gutter={gutter}>
      <S.Row
        align={align}
        justify={justify}
        style={{ ...StyleRow, ...gutterStyle }}
      >
        {children}
      </S.Row>
    </FluxProvider>
  );
};

FluxRow.propTypes = propTypes;
FluxRow.defaultProps = defaultProps;

export default FluxRow;
