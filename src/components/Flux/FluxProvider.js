import PropTypes from "prop-types";
import React, { createContext, useContext, useMemo } from "react";

const FluxContext = createContext();
export const useFlux = () => useContext(FluxContext);

const propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

const defaultProps = {
  gutter: 0,
};

const FluxProvider = ({ children, gutter }) => {
  const valueGutter = useMemo(() => ({ gutter }), []);

  return (
    <FluxContext.Provider value={valueGutter}>{children}</FluxContext.Provider>
  );
};

FluxProvider.propTypes = propTypes;
FluxProvider.defaultProps = defaultProps;

export default FluxProvider;
