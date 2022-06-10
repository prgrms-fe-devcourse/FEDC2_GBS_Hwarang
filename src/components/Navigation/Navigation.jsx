import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
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

const LoggedInedBlock = () => {
  const setLogOut = useSetRecoilState(logoutProcess);

  const handleLogOut = async () => {
    await userLogout();
    setLogOut();
  };

  return (
    <>
      <button type="button">회원정보</button>
      <button type="button">글쓰기</button>
      <button type="button" onClick={handleLogOut}>
        로그아웃
      </button>
    </>
  );
};

const LoggedOutBlock = ({ setModalStatus }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => setModalStatus({ visible: true, type: "login" })}
      >
        로그인
      </button>
      <button
        type="button"
        onClick={() => setModalStatus({ visible: true, type: "signup" })}
      >
        회원가입
      </button>
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
    <div>
      {isLogined ? (
        <LoggedInedBlock />
      ) : (
        <LoggedOutBlock setModalStatus={setModalStatus} />
      )}
    </div>
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
        <div />
        <Ns.LinkBlock>
          <Ns.NavigationLink to="/travel-destination">여행지</Ns.NavigationLink>
          <Ns.NavigationLink to="/plan">일정 만들기</Ns.NavigationLink>
          <Ns.NavigationLink to="/hotel">호텔</Ns.NavigationLink>
          <Ns.NavigationLink to="/guide">이용방법</Ns.NavigationLink>
        </Ns.LinkBlock>
        <Ns.ButtonBlock>
          <NavButtonBlock
            isLogined={isLogined}
            setModalStatus={setModalStatus}
          />
        </Ns.ButtonBlock>
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
