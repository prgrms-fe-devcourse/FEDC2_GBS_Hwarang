import styled from "@emotion/styled";
import Common from "../styles/common";

const NavBar = styled.nav`
  position: fixed;
  z-index: 1000;
  background-color: ${Common.colors.white};
  font-size: ${Common.fontSize.h1};
  width: 100%;
  height: 80px;
  border: 1px solid black;
`;

const Header = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 750px;
  padding-top: 80px;
`;

const HeaderText = styled.div`
  position: absolute;
  top: 350px;
  right: calc(50% - 170px);
  width: 340px;
  font-size: ${Common.fontSize.h1};
  font-weight: bold;
  color: white;
  text-align: center;
`;

const HeaderInput = styled.input`
  position: absolute;
  top: 430px;
  right: calc(50% - 400px);
  width: 800px;
  height: 75px;
  border-radius: 20px;
`;

const HeaderCarousel = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://user-images.githubusercontent.com/72294509/172775171-282deab4-2dc6-4246-98e7-0f35c862b70b.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Section = styled.div`
  box-sizing: border-box;
  align-items: center;
`;

const MainGrid = styled.div`
  width: 1500px;
  height: 800px;
  background-color: ${Common.colors.main_light};
  margin: 0 auto;
`;

const Button = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 50px;
  font-size: ${Common.fontSize.b2};
  color: ${Common.colors.main};
  border: 1px solid ${Common.colors.main};
  border-radius: 10px;
  text-align: center;
  padding-top: 10px;
  margin: 0 auto;
`;

const Footer = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${Common.colors.gray05};
`;

export default {
  NavBar,
  Header,
  Button,
  HeaderInput,
  HeaderText,
  HeaderCarousel,
  Section,
  MainGrid,
  Footer,
};
