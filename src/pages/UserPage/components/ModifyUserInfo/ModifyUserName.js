// import { modifyUserInfo } from "api/user-api";
import React, { useEffect, useState } from "react";
import { Avatar, Button, Text } from "components";
import { DEFAULT_PROFILE_IMAGE } from "api/url";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { userLogin } from "api/auth-api";
import { modifyUserInfo } from "api/user-api";
import { useSetRecoilState } from "recoil";
import { userInfo } from "recoil/user";
import * as S from "./ModifyUserInfo.style";

const propTypes = {
  token: PropTypes.string.isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
  onClose: PropTypes.func,
};
const defaultProps = {
  onClose: () => {},
};

const ModifyUserName = ({ token, user, onClose }) => {
  const setUserInfo = useSetRecoilState(userInfo);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      password: "",
    },
  });

  useEffect(() => {
    reset({
      fullName: user.fullName,
      password: "",
    });
  }, [user]);

  // 사용자 이름만 변경
  const onSubmit = async (data) => {
    const { fullName, password } = data;

    try {
      setServerError("");
      // TODO 사용자 정보 변경 API 요청
      const { email } = user;
      // 1. 로그인을 통해 해당 사용자의 비밀번호가 맞는지 검사
      const result = await userLogin(email, password);
      if (result) {
        // 2. 비밀번호가 일치한다면 사용자의 정보 변경
        const response = await modifyUserInfo(token, fullName, email);
        // 회원정보 변경 완료 시, modal close
        if (response) {
          setUserInfo(response.data);
          onClose();
        }
      }
    } catch (exception) {
      setServerError(exception.response.data);
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
          {...register("fullName", {
            required: {
              value: true,
              message: "변경하실 이름을 입력해 주세요!",
            },
          })}
          useIcon={false}
          placeholder="변경할 이름을 적어주세요😌"
          width="100%"
        />
        {errors.fullName && <S.ErrorMsg>{errors.fullName.message}</S.ErrorMsg>}
      </S.ModalInputWrap>
      <S.ModalInputWrap>
        <S.ModalInput
          {...register("password", {
            required: {
              value: true,
              message:
                "정보를 변경하기 위해서는 비밀번호를 반드시 입력해주셔야 합니다!",
            },
          })}
          useIcon={false}
          placeholder="비밀번호를 입력해주세요."
          width="100%"
          type="password"
        />
        {errors.password && <S.ErrorMsg>{errors.password.message}</S.ErrorMsg>}
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

ModifyUserName.propTypes = propTypes;
ModifyUserName.defaultProps = defaultProps;

export default ModifyUserName;
