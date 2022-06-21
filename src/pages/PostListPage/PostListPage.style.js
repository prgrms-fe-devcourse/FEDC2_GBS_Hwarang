import styled from "@emotion/styled";
import { Button } from "components";
import Common from "styles/common";

const PageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;

  .fold__header {
    position: fixed;
    top: 0;
    height: 70px;
    background-color: ${Common.colors.main};
    opacity: 0.95;
    z-index: 500;
    animation: fadeInHeader 0.2s;
  }

  .fold__input {
    animation: fadeInInput 0.2s;
  }

  @keyframes fadeInHeader {
    from {
      top: -80px;
    }
    to {
      top: 0;
    }
  }

  @keyframes fadeInInput {
    from {
      top: -75px;
    }
    to {
      top: 5px;
    }
  }
`;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 500px;
`;

const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeaderInput = styled.input`
  position: absolute;
  top: 150px;
  right: calc(50% - 250px);
  font-size: 20px;
  width: 500px;
  height: 60px;
  border-radius: 20px;
`;

const Section = styled.div`
  box-sizing: border-box;
  height: auto;
  width: 100%;
  padding: 80px 0;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GotoTopButton = styled(Button)`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;

const NoDataWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 240px;
  padding-top: 110px;
`;

export default {
  PageWrapper,
  HeaderWrapper,
  Header,
  HeaderInput,
  Section,
  LoadingWrapper,
  GotoTopButton,
  NoDataWrapper,
};
