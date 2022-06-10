import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "components/Button";
import Image from "components/Image";
import Icon from "components/Icon";
import {
  loginStatus,
  isTokenExist,
  logoutProcess,
} from "../../recoil/authentication";
import * as Ns from "./Navigation.style";
import Modal from "../Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import { userLogout } from "../../api";

const BUTTON_WIDTH = 90;
const BUTTON_FONT_SIZE = "$n1";
const BUTTON_HEIGHT = 45;

const LoggedInedBlock = () => {
  const setLogOut = useSetRecoilState(logoutProcess);

  const handleLogOut = async () => {
    await userLogout();
    setLogOut();
  };

  return (
    <>
      <Button
        type="button"
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        text="회원정보"
        textSize={BUTTON_FONT_SIZE}
      />
      <Button
        type="button"
        width={BUTTON_WIDTH}
        text="글쓰기"
        textSize={BUTTON_FONT_SIZE}
        height={BUTTON_HEIGHT}
      />
      <Button
        type="button"
        onClick={handleLogOut}
        text="로그아웃"
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
      />
    </>
  );
};

const LoggedOutBlock = ({ setModalStatus }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalStatus({ visible: true, type: "login" })}
        text="로그인"
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
      />
      <Button
        type="button"
        onClick={() => setModalStatus({ visible: true, type: "signup" })}
        text="회원가입"
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
      />
    </>
  );
};

LoggedOutBlock.propTypes = {
  setModalStatus: PropTypes.func,
};

LoggedOutBlock.defaultProps = {
  setModalStatus: null,
};

const NavButtonBlock = ({ isLogined, setModalStatus }) => {
  return (
    <Ns.ButtonBlock>
      {isLogined ? (
        <LoggedInedBlock />
      ) : (
        <LoggedOutBlock setModalStatus={setModalStatus} />
      )}
    </Ns.ButtonBlock>
  );
};

NavButtonBlock.propTypes = {
  isLogined: PropTypes.bool,
  setModalStatus: PropTypes.func,
};

NavButtonBlock.defaultProps = {
  isLogined: false,
  setModalStatus: null,
};

function Navigation() {
  const [modalStatus, setModalStatus] = useState({
    visible: false,
    type: "",
  });

  const [isLogined, setIsLogined] = useRecoilState(loginStatus);
  const TokenExist = useRecoilValue(isTokenExist);

  const changeModalType = (type) => {
    setModalStatus({
      visible: true,
      type,
    });
  };

  useEffect(() => {
    if (!isLogined) {
      if (TokenExist) setIsLogined(true);
    }
  }, [isLogined, TokenExist]);

  return (
    <>
      <Ns.Navigation>
        <Ns.NavLogoBlock>
          <Icon name="menu" />
          <div className="imgWrapper">
            <NavLink to="/">
              <Image
                src="https://mygbs.s3.ap-northeast-2.amazonaws.com/logo.png"
                width="100%"
                height={40}
              />
            </NavLink>
          </div>
        </Ns.NavLogoBlock>
        <Ns.LinkBlock>
          <Ns.NavigationLink to="/travel-destination">여행지</Ns.NavigationLink>
          <Ns.NavigationLink to="/plan">일정 만들기</Ns.NavigationLink>
          <Ns.NavigationLink to="/hotel">호텔</Ns.NavigationLink>
          <Ns.NavigationLink to="/guide">이용방법</Ns.NavigationLink>
        </Ns.LinkBlock>
        <NavButtonBlock isLogined={isLogined} setModalStatus={setModalStatus} />
      </Ns.Navigation>
      <Modal
        visible={modalStatus.visible}
        onClose={() => setModalStatus({ visible: false, type: "" })}
        height="auto"
      >
        {modalStatus.type === "login" ? (
          <Login
            handleLogin={setIsLogined}
            onClose={() => setModalStatus({ visible: false, type: "" })}
            changeModalType={changeModalType}
          />
        ) : (
          <SignUp
            handleSignUp={setIsLogined}
            onClose={() => setModalStatus({ visible: false, type: "" })}
          />
        )}
      </Modal>
    </>
  );
}

export default Navigation;
