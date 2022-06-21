import styled from "@emotion/styled";
import Common from "styles/common";

const Container = styled.div`
  margin-bottom: 200px;
`;

const HeaderContainer = styled.div`
  position: relative;
  height: 550px;
  margin: 0 50px;

  input::placeholder {
    color: ${Common.colors.gray04};
  }
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(60, 60, 60, 0.32) 75%,
    rgba(30, 30, 30, 0.68) 85%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0.3;
  z-index: 1;
`;

const InnerWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: ${({ position }) => (position === "left" ? "88px" : "auto")};
  right: ${({ position }) => (position === "right" ? "88px" : "auto")};
  z-index: 1000;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 88px;
  z-index: 1000;
  user-select: none;
  cursor: pointer;
`;

const List = styled.ul`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: 108px;
  z-index: 1000;
  border: 1px solid ${Common.colors.gray05};
  border-radius: 3px;
  background-color: ${Common.colors.bg_white};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  user-select: none;
  cursor: pointer;
`;

const Item = styled.li`
  display: flex;
  border-bottom: ${({ last }) =>
    last ? "none" : `1px solid ${Common.colors.gray05}`};
  padding: 10px;
  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;

const ButtonWrapper = styled.div`
  display: ${({ isHovering }) => (isHovering ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: calc(50% - 100px);
  z-index: 10;
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const Author = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 120px 0 20px 0;
`;

const ContentList = styled.ul`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding-top: 30px;
`;

const Line = styled.div`
  position: absolute;
  top: 144px;
  left: 60px;
  width: 4px;
  background-color: ${Common.colors.main};
  z-index: 0;
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

const CommentWrapper = styled.div`
  width: 80%;
  margin: 100px auto;
`;

export default {
  Container,
  HeaderContainer,
  Dim,
  InnerWrapper,
  ButtonWrapper,
  ContentContainer,
  Author,
  ContentList,
  Line,
  AddPlanContainer,
  ActionsContainer,
  IconWrapper,
  List,
  Item,
  CommentWrapper,
};
