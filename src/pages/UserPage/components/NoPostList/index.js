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
    navigate("/post/create");
  };

  return (
    <S.NoPostWrapper>
      <Text size="$b2" strong>
        π₯ λ±λ‘λ μ¬ν μΌμ μ΄ μμ΄μ!
      </Text>
      <S.NavigateBlock isOwner={isOwner}>
        <Text size="$n1">λ©μ§ μ¬ν μΌμ  μλ ₯νλ¬ κ°κΈ°</Text>
        <Button
          size="$b1"
          backgroundColor="$white"
          border
          width={190}
          textColor="$main"
          color="$main"
          onClick={onButtonClick}
        >
          μ¬ν μΌμ  μλ ₯
        </Button>
      </S.NavigateBlock>
    </S.NoPostWrapper>
  );
}

NoPostList.propTypes = proptype;
NoPostList.defaultProps = defaultProps;

export default NoPostList;
