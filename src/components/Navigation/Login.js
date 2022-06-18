import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import { userInfo } from "recoil/user";
import * as Ns from "./Navigation.style";
import { userLogin } from "../../api/auth-api";
import { loginProcess } from "../../recoil/authentication";
import Divider from "../Divider";

function Login({ handleLogin, onClose, changeModalType }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  const setToken = useSetRecoilState(loginProcess);
  const setUser = useSetRecoilState(userInfo);

  const [serverError, setServerError] = useState(null);

  const onSubmit = async (data) => {
    const { loginId, loginPassWord } = data;

    try {
      const result = await userLogin(loginId, loginPassWord);
      setToken(result.data.token);
      setUser(result.data.user);
      handleLogin(true);
    } catch (error) {
      setServerError(error.response.data);
    }

    onClose();
  };

  return (
    <Ns.Form onSubmit={handleSubmit(onSubmit)}>
      <Ns.Title>Login</Ns.Title>
      <Divider />
      <div className="inputBlock">
        <Ns.ModalInput
          {...register("loginId", {
            required: { value: true, message: "이메일을 입력해 주세요!" },
          })}
          placeholder="Email"
          useIcon={false}
          width="100%"
          invalid={!!errors.loginId}
        />
        {errors.loginId && <Ns.ErrorMsg>{errors.loginId.message}</Ns.ErrorMsg>}
      </div>
      <div className="inputBlock">
        <Ns.ModalInput
          {...register("loginPassWord", {
            required: { value: true, message: "패스워드를 입력해 주세요!" },
          })}
          placeholder="PassWord"
          type="password"
          useIcon={false}
          width="100%"
          invalid={!!errors.loginPassWord}
        />
        {errors.loginPassWord && (
          <Ns.ErrorMsg>{errors.loginPassWord.message}</Ns.ErrorMsg>
        )}
      </div>
      <div className="server-error">
        {serverError && <Ns.ErrorMsg>{serverError}</Ns.ErrorMsg>}
      </div>
      <Ns.MainButton type="submit">Login</Ns.MainButton>
      <Ns.SubButtonBlock>
        <p>가봤슈와 함께하고 싶으신가요?</p>
        <Ns.SubButton onClick={() => changeModalType("signup")}>
          회원가입
        </Ns.SubButton>
      </Ns.SubButtonBlock>
    </Ns.Form>
  );
}

export default Login;

Login.propTypes = {
  handleLogin: PropTypes.func,
  onClose: PropTypes.func,
  changeModalType: PropTypes.func,
};

Login.defaultProps = {
  handleLogin: null,
  onClose: null,
  changeModalType: null,
};
