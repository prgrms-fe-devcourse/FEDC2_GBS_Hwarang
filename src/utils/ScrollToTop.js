import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const defaultTypes = {};

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

ScrollToTop.propTypes = propTypes;
ScrollToTop.defaultProps = defaultTypes;

export default ScrollToTop;
