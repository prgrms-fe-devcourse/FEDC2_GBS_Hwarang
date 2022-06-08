import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import * as Ns from "./Navigation.style";

function SignUp({ handleSignUp, onClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleSignUp(true);
    onClose();
  };

  return (
    <Ns.Form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("userName", { required: true })} placeholder="Name" />
      <input {...register("signUpId", { required: true })} placeholder="Id" />
      <input
        {...register("signUpPassWord", { required: true })}
        placeholder="PassWord"
      />
      <input
        {...register("checkPassWord", { required: true })}
        placeholder="PassWord"
      />
      <button type="submit">Sign Up</button>
    </Ns.Form>
  );
}

export default SignUp;

SignUp.propTypes = {
  handleSignUp: PropTypes.func,
  onClose: PropTypes.func,
};

SignUp.defaultProps = {
  handleSignUp: null,
  onClose: null,
};
