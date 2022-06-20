import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { loginProcess } from "../../recoil/authentication";
import * as Ns from "./Navigation.style";
import Divider from "../Divider";
import { userSignUp } from "../../api/auth-api";

function SignUp({ handleSignUp, onClose }) {
  const formIds = ["userName", "signUpId", "signUpPassWord", "checkPassWord"];
  const setToken = useSetRecoilState(loginProcess);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    mode: "all",
  });

  const onSubmit = async (data) => {
    const { userName, signUpId, signUpPassWord } = data;
    let result;

    try {
      result = await userSignUp(signUpId, userName, signUpPassWord);
    } catch (error) {
      setServerError(error.response.data);
    }

    setToken(result.data.token);
    setServerError(null);
    formIds.forEach((id) => setValue(id, ""));
    handleSignUp(true);
    onClose();
  };

  return (
    <Ns.Form onSubmit={handleSubmit(onSubmit)}>
      <Ns.Title>SignUp</Ns.Title>
      <Divider />
      <div className="inputBlock">
        <Ns.ModalInput
          {...register("userName", {
            required: { value: true, message: "userName을 입력해 주세요!" },
          })}
          placeholder="Name"
          useIcon={false}
          width="100%"
        />
        {errors.userName && (
          <Ns.ErrorMsg>{errors.userName.message}</Ns.ErrorMsg>
        )}
      </div>
      <div className="inputBlock">
        <Ns.ModalInput
          {...register("signUpId", {
            required: { value: true, message: "이메일을 입력해 주세요!" },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "이메일 형식이 올바르지 않습니다!",
            },
          })}
          placeholder="Email"
          useIcon={false}
          width="100%"
        />
        {errors.signUpId && (
          <Ns.ErrorMsg>{errors.signUpId.message}</Ns.ErrorMsg>
        )}
      </div>
      <div className="inputBlock">
        <Ns.ModalInput
          {...register("signUpPassWord", {
            required: { value: true, message: "비밀번호를 입력해 주세요!" },
            minLength: {
              value: 8,
              message: "최소 8자리 이상 입력해 주세요!",
            },
            maxLength: {
              value: 12,
              message: "최대 12자리 까지만 입력해 주세요!",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
              message: "비밀번호는 알파벳, 특수문자, 숫자를 포함하여야 합니다",
            },
          })}
          placeholder="PassWord"
          type="password"
          useIcon={false}
          width="100%"
        />
        {errors.signUpPassWord && (
          <Ns.ErrorMsg>{errors.signUpPassWord.message}</Ns.ErrorMsg>
        )}
      </div>
      <div className="inputBlock">
        <Ns.ModalInput
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
          useIcon={false}
          width="100%"
        />
        {errors.checkPassWord && (
          <Ns.ErrorMsg>{errors.checkPassWord.message}</Ns.ErrorMsg>
        )}
      </div>
      <div className="server-error">
        {serverError && <Ns.ErrorMsg>{serverError}</Ns.ErrorMsg>}
      </div>
      <Ns.MainButton type="submit">Sign Up</Ns.MainButton>
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
