import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import * as Ns from "./Navigation.style";

function Login({ handleLogin, onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleLogin(true);
    onClose();
  };

  return (
    <Ns.Form onSubmit={handleSubmit(onSubmit)}>
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
