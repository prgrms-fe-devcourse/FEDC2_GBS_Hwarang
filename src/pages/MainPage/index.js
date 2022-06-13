import React from "react";
import { Button, Image, ImageSlider, Slide } from "components";
import Common from "styles/common";
import S from "./MainPage.style";
// import ImageData from "./components/SliderImage/ImageData";
import MainGrid from "./components/MainGrid";
import DummyData from "./dummyData";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div>
      <S.Header>
        <S.HeaderCarousel>
          {/* Main Carousel */}
          <ImageSlider width="100vw" height="auto">
            <Slide
              width="100vw"
              height="750px"
              src="https://mblogthumb-phinf.pstatic.net/20121112_70/lomi__1352646431472qslOl_JPEG/2560-1200%BF%B9%BB%DB%B9%D9%C5%C1%C8%AD%B8%E9%C0%CC%B9%CC%C1%F6.jpg?type=w2"
            />
            <Slide
              width="100vw"
              height="750px"
              src="https://mblogthumb-phinf.pstatic.net/20121112_70/lomi__1352646431472qslOl_JPEG/2560-1200%BF%B9%BB%DB%B9%D9%C5%C1%C8%AD%B8%E9%C0%CC%B9%CC%C1%F6.jpg?type=w2"
            />
            <Slide
              width="100vw"
              height="750px"
              src="https://mblogthumb-phinf.pstatic.net/20121112_70/lomi__1352646431472qslOl_JPEG/2560-1200%BF%B9%BB%DB%B9%D9%C5%C1%C8%AD%B8%E9%C0%CC%B9%CC%C1%F6.jpg?type=w2"
            />
            <Slide
              width="100vw"
              height="750px"
              src="https://mblogthumb-phinf.pstatic.net/20121112_70/lomi__1352646431472qslOl_JPEG/2560-1200%BF%B9%BB%DB%B9%D9%C5%C1%C8%AD%B8%E9%C0%CC%B9%CC%C1%F6.jpg?type=w2"
            />
          </ImageSlider>
        </S.HeaderCarousel>
        <S.HeaderText>여기 가봤슈?</S.HeaderText>
        <S.HeaderInput /* absolute Position Input */ />
      </S.Header>
      <S.Section>
        <S.SectionWrapper>
          <MainGrid
            data={DummyData}
            mainTitle="가봤슈 사용자들의 최고 인기 여행지"
          />
          <Button color="white" type="button">
            <S.LinkButton to="/travel-destination" style={{ color: "white" }}>
              더보기
            </S.LinkButton>
          </Button>
        </S.SectionWrapper>
        <Image
          /* Marketing Image */
          src="https://user-images.githubusercontent.com/72294509/172774786-3db0d345-a7e9-4f30-99bc-adf56a82d87d.png"
          width="100%"
          height="100%"
        />
        <S.SectionWrapper>
          <MainGrid
            data={DummyData}
            mainTitle="가봤슈 사용자들의 최근 여행지"
          />
          <Button color="$main" backgroundColor="$white" type="button" border>
            <S.LinkButton
              to="/travel-destination"
              style={{ color: Common.colors.main }}
            >
              더보기
            </S.LinkButton>
          </Button>
        </S.SectionWrapper>
      </S.Section>
      <Footer />
    </div>
  );
};

export default MainPage;
