import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginStatus } from "recoil/authentication";
import { Modal } from "components";
import Login from "components/Navigation/Login";
import SignUp from "components/Navigation/SignUp";
import Auth from "./Auth";

const propType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  trigger: PropTypes.bool,
  setTrigger: PropTypes.func,
  // 대상이 페이지이면 autoTrigger, children rendering 안함
  isAutoTrigger: PropTypes.bool,
};

const defaultProps = {
  children: null,
  trigger: true,
  setTrigger: null,
  isAutoTrigger: true,
};

function PrivateRoute({ children, trigger, setTrigger, isAutoTrigger }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginStatus);
  const [authModalShow, setAuthModalShow] = useState(false);
  const [authModalType, setAuthModalType] = useState("auth");

  useEffect(() => {
    if (trigger) {
      if (!isLogin) setAuthModalShow(true);
    }
  }, [isLogin, trigger]);

  const handleClose = () => {
    setAuthModalShow(false);

    if (isAutoTrigger) {
      // 페이지 이면, 모달 창을 닫는 순간 메인페이지로 이동
      navigate("/");
    }

    if (setTrigger) setTrigger(false);
    setAuthModalType("auth");
  };

  const modalType = {
    login: (
      <Login
        handleLogin={setIsLogin}
        changeModalType={setAuthModalType}
        onClose={handleClose}
      />
    ),
    signup: <SignUp handleLogin={setIsLogin} onClose={handleClose} />,
    auth: <Auth changeModalType={setAuthModalType} />,
  };

  return (
    <>
      {!isAutoTrigger && children}
      <Modal visible={authModalShow} onClose={handleClose}>
        {modalType[authModalType]}
      </Modal>
    </>
  );
}

PrivateRoute.propTypes = propType;
PrivateRoute.defaultProps = defaultProps;

export default PrivateRoute;
