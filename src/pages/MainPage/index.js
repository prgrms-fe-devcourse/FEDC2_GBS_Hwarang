import React, { useEffect, useState } from "react";
import { Button, Image, ImageSlider } from "components";
import { useRecoilValue } from "recoil";
import { mainPost } from "recoil/post";
import Common from "styles/common";
import S from "./MainPage.style";
import { MainGrid, MainInput, ImageData, MainSkeleton } from "./components";

const MainPage = () => {
  const { popularPost, latestPost } = useRecoilValue(mainPost);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const [loadingLatest, setLoadingLatest] = useState(true);

  useEffect(() => {
    if (popularPost.length !== 0) {
      setLoadingPopular(false);
    }

    if (latestPost.length !== 0) {
      setLoadingLatest(false);
    }
  }, [popularPost, latestPost]);

  return (
    <div>
      <S.Header>
        <S.HeaderCarousel>
          <ImageSlider width="100%" height="auto">
            {ImageData}
          </ImageSlider>
        </S.HeaderCarousel>
        <S.HeaderText>여기 가봤슈?</S.HeaderText>
        <MainInput />
      </S.Header>
      <S.Section>
        <S.SectionWrapper>
          {loadingPopular ? (
            <MainSkeleton />
          ) : (
            <MainGrid
              data={popularPost}
              mainTitle="가봤슈 사용자들의 최고 인기 여행지"
            />
          )}
          <Button color="white" type="button">
            <S.LinkButton
              to="/travel-destination/popular"
              style={{ color: "white" }}
            >
              더보기
            </S.LinkButton>
          </Button>
        </S.SectionWrapper>
        <Image
          /* Marketing Image */
          src="https://mygbs.s3.ap-northeast-2.amazonaws.com/marketing/marketing_Image+(1).png"
          width="100%"
          height="100%"
        />
        <S.SectionWrapper>
          {loadingLatest ? (
            <MainSkeleton />
          ) : (
            <MainGrid
              data={latestPost}
              mainTitle="가봤슈 사용자들의 최근 여행지"
            />
          )}
          <Button color="$main" backgroundColor="$white" type="button" border>
            <S.LinkButton
              to="/travel-destination/latest"
              style={{ color: Common.colors.main }}
            >
              더보기
            </S.LinkButton>
          </Button>
        </S.SectionWrapper>
      </S.Section>
    </div>
  );
};

export default MainPage;
