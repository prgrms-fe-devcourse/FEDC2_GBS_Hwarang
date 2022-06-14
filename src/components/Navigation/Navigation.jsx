import React, { useState, useEffect } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilValueLoadable,
} from "recoil";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "components/Button";
import Image from "components/Image";
import Icon from "components/Icon";
import Avatar from "components/Avatar";
import { userInfo, profileImg } from "recoil/user";
import {
  loginStatus,
  isTokenExist,
  logoutProcess,
  isUserAuthenticated,
} from "../../recoil/authentication";
import * as Ns from "./Navigation.style";
import Modal from "../Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import { userLogout } from "../../api/auth-api";

const BUTTON_WIDTH = 90;
const BUTTON_FONT_SIZE = "$n1";
const BUTTON_HEIGHT = 45;

const LoggedInedBlock = () => {
  const setLogOut = useSetRecoilState(logoutProcess);
  const profile = useRecoilValue(profileImg);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await userLogout();
    setLogOut();
  };

  return (
    <>
      <Avatar src={profile} size={40} />
      <Button
        type="button"
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
        onClick={() => navigate("/mypage")}
      >
        회원정보
      </Button>
      <Button
        type="button"
        width={BUTTON_WIDTH}
        textSize={BUTTON_FONT_SIZE}
        height={BUTTON_HEIGHT}
      >
        글쓰기
      </Button>
      <Button
        type="button"
        onClick={handleLogOut}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
      >
        로그아웃
      </Button>
    </>
  );
};

const LoggedOutBlock = ({ setModalStatus }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => setModalStatus({ visible: true, type: "login" })}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
      >
        로그인
      </Button>
      <Button
        type="button"
        onClick={() => setModalStatus({ visible: true, type: "signup" })}
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
      >
        회원가입
      </Button>
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
  const {
    contents: { isTokenValid, userData },
  } = useRecoilValueLoadable(isUserAuthenticated);
  const setUserInfo = useSetRecoilState(userInfo);

  const changeModalType = (type) => {
    setModalStatus({
      visible: true,
      type,
    });
  };

  useEffect(() => {
    if (!isLogined && TokenExist) {
      if (isTokenValid) {
        setIsLogined(true);
        setUserInfo(userData);
      }
    }
  }, [isLogined, TokenExist, isTokenValid, userData]);

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
