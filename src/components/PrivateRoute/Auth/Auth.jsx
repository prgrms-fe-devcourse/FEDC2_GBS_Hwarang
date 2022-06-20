import React from "react";
import PropTypes from "prop-types";
import { Button, Text, Icon } from "components";
import * as S from "./Auth.style";

const proptype = {
  changeModalType: PropTypes.func,
};

const defaultProps = {
  changeModalType: null,
};

function Auth({ changeModalType }) {
  return (
    <S.PrivateRouteModalWrapper>
      <Icon name="error" width={100} fontSize={150} />
      <Text strong>로그인이 필요합니다</Text>
      <S.ButtonGroup>
        <Button margin="0" onClick={() => changeModalType("login")}>
          로그인
        </Button>
        <Button
          margin="0"
          backgroundColor="$white"
          border
          textColor="$main"
          color="$main"
          onClick={() => changeModalType("signup")}
        >
          회원가입
        </Button>
      </S.ButtonGroup>
    </S.PrivateRouteModalWrapper>
  );
}

Auth.propTypes = proptype;
Auth.defaultProps = defaultProps;

export default Auth;
