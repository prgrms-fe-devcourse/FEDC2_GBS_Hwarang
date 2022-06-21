import React from "react";
import { Spinner } from "components";
import S from "./Loading.style";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <Spinner size={100} />
    </S.LoadingWrapper>
  );
};

export default Loading;
