import { Image } from "components";
import PropTypes from "prop-types";
import React from "react";
import spinnerSvg from "assets/spinner.svg";
import S from "./Spinner.style";

const propTypes = {
  size: PropTypes.number,
  loading: PropTypes.bool,
};

const defaultProps = {
  size: 40,
  loading: true,
};

const Spinner = ({ size, loading }) => {
  return loading ? (
    <S.SpinnerWrapper>
      <Image src={spinnerSvg} width={size} height={size} />
    </S.SpinnerWrapper>
  ) : null;
};

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
