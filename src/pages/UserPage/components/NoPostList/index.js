import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Text, Button } from "components";
import * as S from "./NoPostList.style";

const proptype = {
  isOwner: PropTypes.bool,
};

const defaultProps = {
  isOwner: false,
};

function NoPostList({ isOwner }) {
  const navigate = useNavigate();

  const onButtonClick = (event) => {
    event.preventDefault();
    navigate("/create-post");
  };

  return (
    <S.NoPostWrapper>
      <Text size="$b2" strong>
        😥 등록된 여행 일정이 없어요!
      </Text>
      <S.NavigateBlock isOwner={isOwner}>
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
      </S.NavigateBlock>
    </S.NoPostWrapper>
  );
}

NoPostList.propTypes = proptype;
NoPostList.defaultProps = defaultProps;

export default NoPostList;
