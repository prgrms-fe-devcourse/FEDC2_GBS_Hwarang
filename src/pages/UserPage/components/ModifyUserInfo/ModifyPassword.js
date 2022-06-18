import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { userLogin, userLogout } from "api/auth-api";
import { modifyPassword } from "api/user-api";
import { Avatar, Button, Text } from "components";
import { DEFAULT_PROFILE_IMAGE } from "api/url";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { logoutProcess } from "recoil/authentication";
import * as S from "./ModifyUserInfo.style";

const propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  onClose: PropTypes.func,
};
const defaultProps = {
  onClose: () => {},
};

const ModifyPassword = ({ token, user, onClose }) => {
  const navigate = useNavigate();
  const setLogout = useSetRecoilState(logoutProcess);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      passwordConfirm: "",
    },
  });

  const onSubmit = async (data) => {
    const { currentPassword, newPassword } = data;

    try {
      setServerError("");
      const { email } = user;
      // 1. 로그인을 통해 사용자의 비밀번호가 맞는지 검사
      const result = await userLogin(email, currentPassword);
      if (result) {
        // 2. 비밀번호가 일치한다면 사용자의 정보 변경
        await modifyPassword(token, newPassword);
        // 3. 비밀번호 변경이 성공했다면 강제 로그아웃
        await userLogout();
        await setLogout();
        onClose();
        // 4. 강제 로그아웃 성공 시, 메인페이지로 이동
        navigate("/?needLogin=true");
      }
    } catch (exception) {
      console.log(exception);
      setServerError(
        exception.response ? exception.response.data : "에러가 발생하였습니다."
      );
    }
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.ProfileWrap>
        <Avatar src={user.image || DEFAULT_PROFILE_IMAGE} size={150} />
        <Text size="$b3" strong style={{ marginTop: 20 }}>
          {user.fullName}
        </Text>
      </S.ProfileWrap>
      <S.ModalInputWrap>
        <S.ModalInput
          {...register("currentPassword", {
            required: { value: true, message: "현재 비밀번호를 입력해주세요!" },
          })}
          useIcon={false}
          placeholder="현재 비밀번호를 입력해주세요."
          width="100%"
          type="password"
        />
        {errors.currentPassword && (
          <S.ErrorMsg>{errors.currentPassword.message}</S.ErrorMsg>
        )}
      </S.ModalInputWrap>
      <S.ModalInputWrap>
        <S.ModalInput
          {...register("newPassword", {
            required: {
              value: true,
              message: "변경할 비밀번호를 입력해주세요!",
            },
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
          useIcon={false}
          placeholder="변경할 비밀번호를 입력해주세요."
          width="100%"
          type="password"
        />
        {errors.newPassword && (
          <S.ErrorMsg>{errors.newPassword.message}</S.ErrorMsg>
        )}
      </S.ModalInputWrap>
      <S.ModalInputWrap>
        <S.ModalInput
          {...register("passwordConfirm", {
            required: {
              value: true,
              message: "비밀번호가 일치하지 않습니다.",
            },
            validate: (value) =>
              value === watch("newPassword") || "비밀번호가 일치하지 않습니다.",
          })}
          useIcon={false}
          placeholder="변경할 비밀번호를 다시 적어주세요."
          width="100%"
          type="password"
        />
        {errors.passwordConfirm && (
          <S.ErrorMsg>{errors.passwordConfirm.message}</S.ErrorMsg>
        )}
      </S.ModalInputWrap>
      <S.ErrorMsg>{serverError}</S.ErrorMsg>
      <div>
        <Button
          type="submit"
          width={90}
          height={45}
          style={{ display: "inline-block", float: "right", marginLeft: 10 }}
        >
          저장
        </Button>
        <Button
          type="button"
          width={90}
          height={45}
          color="$main"
          backgroundColor="$bg_white"
          border
          onClick={onClose}
          style={{ display: "inline-block", float: "right" }}
        >
          취소
        </Button>
      </div>
    </S.Form>
  );
};

ModifyPassword.propTypes = propTypes;
ModifyPassword.defaultProps = defaultProps;

export default ModifyPassword;
