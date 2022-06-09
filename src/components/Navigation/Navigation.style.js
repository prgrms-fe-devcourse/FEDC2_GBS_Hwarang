import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.8rem;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
