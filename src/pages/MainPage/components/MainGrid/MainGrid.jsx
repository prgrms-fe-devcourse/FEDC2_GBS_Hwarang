import React from "react";
import Flux from "../../../../components/Flux";
import MainGridWrapper from "./MainGrid.style";
import MainGridCard from "./MainGridCard";

/* 더미 데이터 */
const MainGrid = () => {
  const { FluxRow, FluxCol } = Flux;
  return (
    <MainGridWrapper>
      <FluxRow>
        <FluxCol span={4}>
          <MainGridCard
            src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
            textChildren="한국의 한옥마을"
          />
        </FluxCol>
        <FluxCol span={4}>
          <MainGridCard
            src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
            textChildren="한국의 한옥마을"
          />
        </FluxCol>
        <FluxCol span={4}>
          <MainGridCard
            src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
            textChildren="한국의 한옥마을"
          />
        </FluxCol>
      </FluxRow>
      <FluxRow>
        <FluxCol span={4}>
          <MainGridCard
            src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
            textChildren="한국의 한옥마을"
          />
        </FluxCol>
        <FluxCol span={4}>
          <MainGridCard
            src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
            textChildren="한국의 한옥마을"
          />
        </FluxCol>
        <FluxCol span={4}>
          <MainGridCard
            src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
            textChildren="한국의 한옥마을"
          />
        </FluxCol>
      </FluxRow>
    </MainGridWrapper>
  );
};

export default MainGrid;
