import { Flux, Skeleton } from "components";
import React from "react";
import S from "./MainSkeleton.style";

const MainSkeleton = () => {
  const { FluxRow, FluxCol } = Flux;

  const renderSkeleton = () => {
    const result = [];
    for (let i = 0; i < 6; i += 1) {
      result.push(
        <FluxCol key={i}>
          <S.CardWrapper>
            <Skeleton.Box width="100%" height={180} />
            <Skeleton.Paragraph />
          </S.CardWrapper>
        </FluxCol>
      );
    }
    return result;
  };

  return (
    <S.MainGridWrapper>
      <S.TextWrapper>
        <Skeleton.Paragraph line={1} />
      </S.TextWrapper>
      <FluxRow>{renderSkeleton()}</FluxRow>
    </S.MainGridWrapper>
  );
};

export default MainSkeleton;
