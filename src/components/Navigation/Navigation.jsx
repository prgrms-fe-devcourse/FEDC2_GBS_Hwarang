import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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

function Navigation() {
  const [modalStatus, setModalStatus] = useState({
    visible: false,
    type: "",
  });

  const [isLogined, setIsLogined] = useRecoilState(loginStatus);
  const TokenExist = useRecoilValue(isTokenExist);
  const setLogOut = useSetRecoilState(logoutProcess);

  const handleLogOut = async () => {
    await userLogout();
    setLogOut();
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
          {isLogined ? (
            <>
              <button type="button">회원정보</button>
              <button type="button">글쓰기</button>
              <button type="button" onClick={handleLogOut}>
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setModalStatus({ visible: true, type: "login" })}
              >
                로그인
              </button>
              <button
                type="button"
                onClick={() =>
                  setModalStatus({ visible: true, type: "signup" })
                }
              >
                회원가입
              </button>
            </>
          )}
        </Ns.ButtonBlock>
      </Ns.Navigation>
      <Modal
        visible={modalStatus.visible}
        onClose={() => setModalStatus({ visible: false, type: "" })}
      >
        {modalStatus.type === "login" ? (
          <Login
            handleLogin={setIsLogined}
            onClose={() => setModalStatus({ visible: false, type: "" })}
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
