import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import PropTypes from "prop-types";
import * as Ns from "./Navigation.style";
import { userLogin } from "../../api";
import { loginProcess } from "../../recoil/authentication";
import Divider from "../Divider";

function Login({ handleLogin, onClose }) {
  const { register, handleSubmit } = useForm();
  const setToken = useSetRecoilState(loginProcess);

  const onSubmit = async (data) => {
    const { loginId, loginPassWord } = data;
    const result = await userLogin(loginId, loginPassWord);

    setToken(result.data.token);

    handleLogin(true);
    onClose();
  };

  return (
    <Ns.Form onSubmit={handleSubmit(onSubmit)}>
      <Ns.Title>Login</Ns.Title>
      <Divider />
      <input {...register("loginId", { required: true })} placeholder="ID" />
      <input
        {...register("loginPassWord", { required: true })}
        placeholder="PassWord"
      />
      <button type="submit">Login</button>
    </Ns.Form>
  );
}

export default Login;

Login.propTypes = {
  handleLogin: PropTypes.func,
  onClose: PropTypes.func,
};

Login.defaultProps = {
  handleLogin: null,
  onClose: null,
};
