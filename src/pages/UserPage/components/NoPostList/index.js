import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "components";
import * as S from "./NoPostList.style";

function NoPostList() {
  const navigate = useNavigate();

  const onButtonClick = (event) => {
    event.preventDefault();
    navigate("/create-post");
  };

  return (
    <S.NoPostWrapper>
      <Text size="$b1">😥 등록된 여행 일정이 없어요!</Text>
      <div className="navigate-block">
        <Text size="$n1">멋진 여행 일정 입력하러 가기</Text>
        <Button
          size="$b1"
          backgroundColor="$white"
          border
          width={190}
          textColor="$main"
          color="$main"
          onClick={onButtonClick}
        >
          여행 일정 입력
        </Button>
      </div>
    </S.NoPostWrapper>
  );
}

export default NoPostList;
