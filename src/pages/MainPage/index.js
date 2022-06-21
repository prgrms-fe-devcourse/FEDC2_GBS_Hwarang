import React, { useEffect, useState } from "react";
import { Button, Image, ImageSlider } from "components";
import { useRecoilValue } from "recoil";
import { mainPost } from "recoil/post";
import S from "./MainPage.style";
import { MainGrid, MainInput, ImageData, MainSkeleton } from "./components";

const MainPage = () => {
  const { popularPost, latestPost } = useRecoilValue(mainPost);
  const [popular, setPopular] = useState(undefined);
  const [latest, setLatest] = useState(undefined);
  const [loadingPopular, setLoadingPopular] = useState(true);
  const [loadingLatest, setLoadingLatest] = useState(true);

  useEffect(() => {
    if (popularPost.content === null) return;

    if (popularPost.length !== 0) {
      setPopular(popularPost);
      setLoadingPopular(false);
    }
  }, [popularPost]);

  useEffect(() => {
    if (latestPost.content === null) return;

    if (latestPost.length !== 0) {
      setLatest(latestPost);
      setLoadingLatest(false);
    }
  }, [latestPost]);

  return (
    <div>
      <S.Header>
        <S.HeaderCarousel>
          <S.CarouselDim />
          <ImageSlider width="100%" height="100%">
            {ImageData}
          </ImageSlider>
        </S.HeaderCarousel>
        <S.HeaderText>
          <Image
            src="https://mygbs.s3.ap-northeast-2.amazonaws.com/main_text.png"
            width="350px"
            height="auto"
          />
        </S.HeaderText>
        <MainInput />
        <S.HeaderDescription>
          <Image
            src="https://mygbs.s3.ap-northeast-2.amazonaws.com/main_ment.png"
            width={450}
            height="auto"
          />
        </S.HeaderDescription>
      </S.Header>
      <S.Section>
        <S.SectionWrapper>
          {loadingPopular ? (
            <MainSkeleton />
          ) : (
            <MainGrid
              data={popular || []}
              mainTitle="가봤슈 사용자들의 최고 인기 여행지"
            />
          )}
          <S.LinkButton
            to="/travel-destination/popular"
            style={{ color: "white" }}
          >
            <Button color="white" type="button">
              더보기
            </Button>
          </S.LinkButton>
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
              data={latest || []}
              mainTitle="가봤슈 사용자들의 최근 여행지"
            />
          )}
          <S.LinkButton
            to="/travel-destination/latest"
            style={{ color: "white" }}
          >
            <Button color="white" type="button">
              더보기
            </Button>
          </S.LinkButton>
        </S.SectionWrapper>
      </S.Section>
    </div>
  );
};

export default MainPage;
