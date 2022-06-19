import styled from "@emotion/styled";
import Common from "styles/common";

const Content = styled.li`
  display: flex;
  padding: 24px 0;
  &:hover {
    /* background-color: rgba(0, 0, 0, 0.2); */
    background-color: ${({ type }) =>
      type === "detail" ? "none" : "rgba(0, 0, 0, 0.2)"};
  }
`;

const Dot = styled.div`
  align-self: center;
  width: 20px;
  height: 20px;
  margin-left: 100px;
  margin-right: 80px;
  border: 1px solid ${Common.colors.main};
  border-radius: 50%;
  background-color: ${({ isHovering }) =>
    isHovering ? `${Common.colors.white}` : `${Common.colors.main}`};
  color: ${Common.colors.main};
  z-index: 1;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: ${({ isHovering }) => (isHovering ? "block" : "none")};
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -20px;
  display: ${({ isHovering }) => (isHovering ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid ${Common.colors.gray03};
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 16px;
  margin-top: 16px;
  input::placeholder {
    color: ${Common.colors.gray04};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
`;

export default {
  Content,
  Dot,
  ImageContainer,
  ImageWrapper,
  ButtonWrapper,
  IconWrapper,
  Info,
  TextWrapper,
};
