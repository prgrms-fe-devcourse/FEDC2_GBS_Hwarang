import styled from "@emotion/styled";
import { Input } from "components";
import Common from "styles/common";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  gap: 10px;
`;

export const ModalInput = styled(Input)`
  border-radius: 6.25em;
  border-color: ${Common.colors.main};
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
  align-self: flex-start;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
