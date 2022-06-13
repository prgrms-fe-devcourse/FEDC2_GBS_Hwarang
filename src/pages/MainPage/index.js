import React from "react";
import { Button, Image, ImageSlider, Slide } from "components";
import { useRecoilValue } from "recoil";
import { mainPost } from "recoil/post";
import S from "./MainPage.style";
// import ImageData from "./components/SliderImage/ImageData";
import MainGrid from "./components/MainGrid";
import Footer from "../../components/Footer";
import MainInput from "./components/MainInput";

const MainPage = () => {
  const { popularPost, latestPost } = useRecoilValue(mainPost);

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
        <MainInput />
      </S.Header>
      <S.Section>
        <S.SectionWrapper>
          <MainGrid
            data={popularPost}
            mainTitle="가봤슈 사용자들의 최고 인기 여행지"
          />
          <Button color="white" type="button">
            더보기
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
            data={latestPost}
            mainTitle="가봤슈 사용자들의 최근 여행지"
          />
          <Button color="$main" backgroundColor="$white" type="button" border>
            더보기
          </Button>
        </S.SectionWrapper>
      </S.Section>
      <Footer />
    </div>
  );
};

export default MainPage;
