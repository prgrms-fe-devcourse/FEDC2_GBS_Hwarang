import React from "react";
import { Text } from "components";
import Common from "styles/common";
import S from "./ScrollTopButton.style";

const ScrollTopButton = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <S.ButtonWrapper
      width={50}
      height={50}
      backgroundColor={Common.colors.white}
      border
      color={Common.colors.main}
      onClick={() => {
        handleScroll();
      }}
    >
      <Text size="$c1" color={Common.colors.main} block={false}>
        Top
      </Text>
    </S.ButtonWrapper>
  );
};

export default ScrollTopButton;
