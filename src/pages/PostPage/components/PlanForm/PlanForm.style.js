import styled from "@emotion/styled";
import Common from "styles/common";

const Content = styled.li`
  display: flex;
  gap: 15px;
  padding: 24px 0;
  &:hover {
    /* background-color: rgba(0, 0, 0, 0.2); */
    background-color: ${({ type }) =>
      type === "detail" ? "none" : Common.colors.gray05};
  }
`;

const Dot = styled.div`
  align-self: center;
  width: 20px;
  height: 20px;
  margin-left: 51px;
  margin-right: 60px;
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
  &:hover {
    .css-1j9s42l {
      display: block;
    }
    .css-qw4r3r {
      display: flex;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 180px;
  border-radius: 20px;
  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: none;
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: -20px;
  display: none;
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
  flex-grow: 1;
  gap: 5px;
  margin-left: 16px;
  margin-top: 5px;
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
