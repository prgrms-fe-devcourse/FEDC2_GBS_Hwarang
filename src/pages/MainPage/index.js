import React from "react";
import { Button, Image } from "components";
import S from "./MainPage.style";
import MainGrid from "./components/MainGrid";
import DummyData from "./dummyData";

const MainPage = () => {
  return (
    <div>
      <S.NavBar>
        {/* Navigation Bar */}
        가봤슈 Navigation Bar
      </S.NavBar>
      <S.Header>
        <S.HeaderCarousel>{/* Main Carousel */}</S.HeaderCarousel>
        <S.HeaderText>여기 가봤슈?</S.HeaderText>
        <S.HeaderInput /* absolute Position Input */ />
      </S.Header>
      <S.Section>
        <div>
          <MainGrid
            data={DummyData}
            mainTitle="가봤슈 사용자들의 최고 인기 여행지"
          />
          <Button color="white" type="button">
            더보기
          </Button>
        </div>
        <Image
          /* Marketing Image */
          src="https://user-images.githubusercontent.com/72294509/172774786-3db0d345-a7e9-4f30-99bc-adf56a82d87d.png"
          width="100%"
          height="100%"
        />
        <div>
          <MainGrid
            data={DummyData}
            mainTitle="가봤슈 사용자들의 최근 여행지"
          />
          <Button color="$main" backgroundColor="$white" type="button" border>
            더보기
          </Button>
        </div>
      </S.Section>
      <S.Footer>Footer</S.Footer>
    </div>
  );
};

export default MainPage;
