import React from "react";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { loginProcess } from "../../recoil/authentication";
import * as Ns from "./Navigation.style";
import Divider from "../Divider";
import { userSignUp } from "../../api";

function SignUp({ handleSignUp, onClose }) {
  const formIds = ["userName", "signUpId", "signUpPassWord", "checkPassWord"];
  const setToken = useSetRecoilState(loginProcess);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    const { userName, signUpId, signUpPassWord } = data;
    const result = await userSignUp(signUpId, userName, signUpPassWord);

    setToken(result.data.token);

    formIds.forEach((id) => setValue(id, ""));
    handleSignUp(true);
    onClose();
  };

  return (
    <>
      <Ns.Title>SignUp</Ns.Title>
      <Divider />
      <Ns.Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("userName", {
            required: { value: true, message: "userName을 입력해 주세요!" },
          })}
          placeholder="Name"
        />
        {errors.userName && (
          <Ns.ErrorMsg>{errors.userName.message}</Ns.ErrorMsg>
        )}
        <input
          {...register("signUpId", {
            required: { value: true, message: "아이디를 입력해 주세요!" },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "이메일 형식이 올바르지 않습니다!",
            },
          })}
          placeholder="Id"
        />
        {errors.signUpId && (
          <Ns.ErrorMsg>{errors.signUpId.message}</Ns.ErrorMsg>
        )}
        <input
          {...register("signUpPassWord", {
            required: { value: true, message: "비밀번호를 입력해 주세요!" },
          })}
          placeholder="PassWord"
          type="password"
        />
        {errors.signUpPassWord && (
          <Ns.ErrorMsg>{errors.signUpPassWord.message}</Ns.ErrorMsg>
        )}
        <input
          {...register("checkPassWord", {
            required: {
              value: true,
              message: "비밀번호 확인란을 입력해 주세요",
            },
            validate: (value) =>
              value === watch("signUpPassWord") ||
              "비밀번호가 일치하지 않습니다!",
          })}
          placeholder="PassWord"
          type="password"
        />
        {errors.checkPassWord && (
          <Ns.ErrorMsg>{errors.checkPassWord.message}</Ns.ErrorMsg>
        )}
        <button type="submit">Sign Up</button>
      </Ns.Form>
    </>
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
