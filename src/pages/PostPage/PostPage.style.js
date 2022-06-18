import styled from "@emotion/styled";
import Common from "styles/common";

const Container = styled.div`
  margin-bottom: 200px;
`;

const HeadeContainer = styled.div`
  position: relative;
  height: 550px;
  margin: 0 50px;
  input::placeholder {
    color: ${Common.colors.gray04};
  }
`;

const InnerWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: ${({ position }) => (position === "left" ? "88px" : "auto")};
  right: ${({ position }) => (position === "right" ? "88px" : "auto")};
  z-index: 1000;
`;

const ButtonWrapper = styled.div`
  display: ${({ isHovering }) => (isHovering ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: calc(50% - 100px);
`;

const ContentContainer = styled.div``;

const Author = styled.div`
  padding-left: 100px;
  padding-top: 80px;
`;

const ContentList = styled.ul`
  position: relative;
  padding-top: 30px;
`;

const Line = styled.div`
  position: absolute;
  top: 144px;
  left: 109px;
  width: 4px;
  background-color: ${Common.colors.main};
  z-index: -1;
`;

const AddPlanContainer = styled.div`
  width: 100%;
  height: 274px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Common.colors.gray06};
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding-top: 100px;
  button {
    margin: 0;
  }
`;

export default {
  Container,
  HeadeContainer,
  InnerWrapper,
  ButtonWrapper,
  ContentContainer,
  Author,
  ContentList,
  Line,
  AddPlanContainer,
  ActionsContainer,
};
