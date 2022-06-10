import React from "react";
import S from "./MainPage.style";
import Image from "../../components/Image";
import MainGrid from "./components/MainGrid";

const MainPage = () => {
  return (
    <div>
      <S.Header>
        <S.HeaderCarousel>{/* Main Carousel */}</S.HeaderCarousel>
        <S.HeaderText>여기 가봤슈?</S.HeaderText>
        <S.HeaderInput /* absolute Position Input */ />
      </S.Header>
      <S.Section>
        <div>
          <h1>가봤슈 사용자들의 최고 인기 여행지</h1>
          <MainGrid />
          <S.Button type="button">더보기</S.Button>
        </div>
        <Image
          /* Marketing Image */ src="https://user-images.githubusercontent.com/72294509/172774786-3db0d345-a7e9-4f30-99bc-adf56a82d87d.png"
          width="100%"
          height="100%"
        />
        <div>
          <h1>가봤슈에 올라온 최근 여행지</h1>
          <MainGrid />
          <S.Button type="button">더보기</S.Button>
        </div>
      </S.Section>
      <S.Footer>Footer</S.Footer>
    </div>
  );
};

export default MainPage;
