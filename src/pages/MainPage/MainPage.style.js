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
  top: 280px;
  right: calc(50% - 170px);
  width: 350px;
  font-size: ${Common.fontSize.title};
  font-weight: bold;
  color: white;
  text-align: center;
  z-index: 2;
`;

const HeaderInput = styled.input`
  position: absolute;
  top: 350px;
  right: calc(50% - 400px);
  width: 800px;
  height: 75px;
  border-radius: 20px;
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
  HeaderInput,
  HeaderText,
  HeaderCarousel,
  Section,
  SectionWrapper,
  LinkButton,
  Footer,
  CarouselDim,
};
