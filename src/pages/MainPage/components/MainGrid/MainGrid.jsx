/* eslint-disable import/no-absolute-path */
import React from "react";
import { Flux, Image, Text, ToggleButton } from "components";
import PropTypes from "prop-types";
import likesSvg from "assets/likes.svg";
import likesClickedSvg from "assets/likes_clicked.svg";
import commentSvg from "assets/comment.svg";
import S from "./MainGrid.style";
import MainGridCard from "./MainGridCard";

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  mainTitle: PropTypes.string.isRequired,
};

const MainGrid = ({ data, mainTitle }) => {
  const { FluxRow, FluxCol } = Flux;
  return (
    <S.MainGridWrapper>
      <S.TextWrapper>
        <Text strong size="$b1">
          {mainTitle}
        </Text>
      </S.TextWrapper>
      <FluxRow>
        {data.map((post) => {
          const { _id, image, title, author, createdAt, likes, comments } =
            post;
          return (
            <FluxCol key={_id}>
              <S.CardWrapper>
                <MainGridCard src={image} textChildren={title} />
                <FluxRow padding="0 10px">
                  <FluxCol span={9}>
                    <Text size="$n1">
                      {author}, {createdAt}
                    </Text>
                  </FluxCol>
                  <FluxCol span={1.5}>
                    <ToggleButton
                      disabled={false}
                      onClick={() => console.log("Clicked")}
                      replaceChildren={
                        <Image
                          src={likesClickedSvg}
                          width={15}
                          height={15}
                          mode="contain"
                        />
                      }
                      textSize="$n1"
                      text={likes.length}
                    >
                      <Image
                        src={likesSvg}
                        width={15}
                        height={15}
                        mode="contain"
                      />
                    </ToggleButton>
                  </FluxCol>
                  <FluxCol span={1.5}>
                    <ToggleButton textSize="$n1" text={comments.length}>
                      <Image src={commentSvg} width={15} height={15} />
                    </ToggleButton>
                  </FluxCol>
                </FluxRow>
              </S.CardWrapper>
            </FluxCol>
          );
        })}
      </FluxRow>
    </S.MainGridWrapper>
  );
};

MainGrid.propTypes = propTypes;

export default MainGrid;
