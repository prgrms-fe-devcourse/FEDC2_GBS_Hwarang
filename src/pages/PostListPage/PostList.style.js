import styled from "@emotion/styled";
import { Button } from "components";
import Common from "styles/common";

const PageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;

  .fold__header {
    position: fixed;
    top: 0;
    height: 70px;
    background-color: ${Common.colors.white};
    opacity: 0.95;
    z-index: 500;
    animation-delay: 1s;
    animation: fadeIn 0.3s;
    border-bottom: 1px solid ${Common.colors.main};
  }

  .fold__input {
    top: 10px;
    width: 500px;
    height: 45px;
  }

  @keyframes fadeIn {
    from {
      top: -80px;
    }
    to {
      top: 0;
    }
  }
`;

const Header = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 550px;
  background-color: ${Common.colors.main_light};
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

const GotoTopButton = styled(Button)`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;

export default {
  PageWrapper,
  Header,
  HeaderInput,
  Section,
  GotoTopButton,
};
