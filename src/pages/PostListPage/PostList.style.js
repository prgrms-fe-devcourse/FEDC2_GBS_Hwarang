import styled from "@emotion/styled";
import Common from "styles/common";

const Header = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 550px;
  border: 1px solid black;
`;

const HeaderInput = styled.input`
  position: absolute;
  top: 200px;
  right: calc(50% - 300px);
  font-size: 20px;
  width: 600px;
  height: 70px;
  border-radius: 20px;
`;

const Section = styled.div`
  box-sizing: border-box;
  height: 1500px;
  width: 100%;
  background-color: ${Common.colors.main_light};
`;

export default { Header, HeaderInput, Section };
