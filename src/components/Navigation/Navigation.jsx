import React, { useEffect, useState } from "react";
import {
  useRecoilState,
  useRecoilValue,
  // eslint-disable-next-line
  useRecoilTransaction_UNSTABLE,
} from "recoil";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import useQuery from "hooks/useQuery";
import { Button, Image, Icon, Popup, Alarm, SideBar, Text } from "components";
import { userInfo } from "recoil/user";
import { useCookies } from "react-cookie";
import { loginStatus, jwtToken } from "../../recoil/authentication";
import * as Ns from "./Navigation.style";
import Modal from "../Modal";
import Login from "./Login";
import SignUp from "./SignUp";
import { userLogout } from "../../api/auth-api";

const BUTTON_WIDTH = 90;
const BUTTON_FONT_SIZE = "$n1";
const BUTTON_HEIGHT = 45;

const LoggedInedBlock = () => {
  const myInfo = useRecoilValue(userInfo);
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);

  const LogOut = useRecoilTransaction_UNSTABLE(({ set }) => () => {
    set(loginStatus, false);
    set(jwtToken, "");
  });

  const handleLogOut = async () => {
    await userLogout();
    LogOut();
    removeCookie("token", { path: "/" });
    navigate("/");
  };

  return (
    <>
      <Alarm />
      <Button
        type="button"
        width={BUTTON_WIDTH}
        height={BUTTON_HEIGHT}
        textSize={BUTTON_FONT_SIZE}
        // eslint-disable-next-line
        onClick={() => navigate(`userpage/${myInfo._id}`)}
      >
        회원정보
      </Button>
      <Button
        type="button"
        width={BUTTON_WIDTH}
        textSize={BUTTON_FONT_SIZE}
        height={BUTTON_HEIGHT}
        onClick={() => navigate("/post/create")}
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
  const location = useLocation();
  // 사용자 리스트 사이드 바 hide / show flag
  const query = useQuery();
  const [sideBarShow, setSideBarShow] = useState(false);
  const [modalStatus, setModalStatus] = useState({
    visible: false,
    type: "",
  });

  const [isLogined, setIsLogined] = useRecoilState(loginStatus);

  const changeModalType = (type) => {
    setModalStatus({
      visible: true,
      type,
    });
  };

  // navigation 변경될 때마다, 모든 popup 닫기
  useEffect(() => {
    setSideBarShow(false);
    setModalStatus({
      visible: false,
      type: "",
    });
  }, [location]);
  useEffect(() => {
    if (query.get("needLogin") != null) {
      setModalStatus({
        visible: true,
        type: "login",
      });
    }
  }, [query]);

  return (
    <>
      <Ns.Navigation>
        <Ns.NavLogoBlock>
          <Icon
            name="menu"
            onClick={() => setSideBarShow(true)}
            style={{ cursor: "pointer" }}
          />
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
          <Ns.NavigationLink to="/travel-destination/all">
            <Text size="$c2" color="#000000" strong>
              여행
            </Text>
          </Ns.NavigationLink>
          <Ns.NavigationLink to="/plan">
            <Text size="$c2" color="#000000" strong>
              일정 만들기
            </Text>
          </Ns.NavigationLink>
          <Ns.NavigationLink to="/hotel">
            <Text size="$c2" color="#000000" strong>
              호텔
            </Text>
          </Ns.NavigationLink>
          <Ns.NavigationLink to="/guide">
            <Text size="$c2" color="#000000" strong>
              이용방법
            </Text>
          </Ns.NavigationLink>
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
      <Popup
        size={350}
        show={sideBarShow}
        onClose={() => setSideBarShow(false)}
      >
        <SideBar margin={5} padding="36px 0 0 0" show={sideBarShow} />
      </Popup>
    </>
  );
}

export default Navigation;
