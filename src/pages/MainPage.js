import React from "react";
import S from "./MainPage.style";
import Image from "../components/Image";

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
          <S.MainGrid>
            Grid Section{/* Main Grid Component - 인기순 */}
          </S.MainGrid>
          <S.Button type="button">더보기</S.Button>
        </div>
        <Image
          /* Marketing Image */ src="https://user-images.githubusercontent.com/72294509/172774786-3db0d345-a7e9-4f30-99bc-adf56a82d87d.png"
          width="100%"
          height="100%"
        />
        <div>
          <S.MainGrid>
            Grid Section{/* Main Grid Component - 최신순 */}
          </S.MainGrid>
          <S.Button type="button">더보기</S.Button>
        </div>
      </S.Section>
      <S.Footer>Footer</S.Footer>
    </div>
  );
};

export default MainPage;
