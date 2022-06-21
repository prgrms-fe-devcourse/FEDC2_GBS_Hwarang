import styled from "@emotion/styled";
import Common from "styles/common";
import { Link } from "react-router-dom";

const Header = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 750px;
`;

const HeaderText = styled.div`
  position: absolute;
  top: 220px;
  right: calc(50% - 175px);
  width: 350px;
  text-align: center;
  z-index: 2;
`;

const HeaderDescription = styled.div`
  position: absolute;
  top: 425px;
  right: calc(50% - 225px);
  width: 450px;
  height: 75px;
  border-radius: 20px;
  z-index: 2;
`;

const CarouselDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
  z-index: 1;
`;

const HeaderCarousel = styled.div`
  width: 100%;
  height: 100%;
  /* background-repeat: no-repeat; */
  overflow: hidden;
  background-size: cover;
`;

const Section = styled.div`
  box-sizing: border-box;
  align-items: center;
`;

const SectionWrapper = styled.div`
  box-sizing: border-box;
  padding: 100px 0;
`;

const LinkButton = styled(Link)`
  text-decoration: none;
`;

const Footer = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${Common.colors.gray05};
`;

export default {
  Header,
  HeaderDescription,
  HeaderText,
  HeaderCarousel,
  Section,
  SectionWrapper,
  LinkButton,
  Footer,
  CarouselDim,
};
