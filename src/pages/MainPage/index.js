import React from "react";
import { Button, Image, ImageSlider, Slide, Footer } from "components";
import { useRecoilValue } from "recoil";
import { mainPost } from "recoil/post";
import Common from "styles/common";
import S from "./MainPage.style";
// import ImageData from "./components/SliderImage/ImageData";
import MainGrid from "./components/MainGrid";
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
              src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg"
            />
            <Slide
              width="100vw"
              height="750px"
              src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg"
            />
            <Slide
              width="100vw"
              height="750px"
              src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg"
            />
            <Slide
              width="100vw"
              height="750px"
              src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg"
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
            data={latestPost}
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
