import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Input from "components/Input";
import Common from "styles/common";

export const Navigation = styled.nav`
  display: flex;
`;

export const LinkBlock = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonBlock = styled.div`
  display: flex;
`;

export const MainButton = styled.button`
  background-color: ${Common.colors.main};
  color: ${Common.colors.white};
  border-radius: 5px;
  border: 0;
  width: 30%;
  padding: 1rem 2rem;
  font-size: ${Common.fontSize.c2};
  font-weight: bolder;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const SubButtonBlock = styled.div`
  margin-top: 10px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  p {
    font-size: 0.9rem;
    font-weight: bolder;
  }
`;

export const SubButton = styled.button`
  background-color: ${Common.colors.white};
  color: ${Common.colors.main};
  border: 1px solid ${Common.colors.main};
  border-radius: 5px;
  padding: 0.5rem 1.5rem;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .inputBlock {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
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
