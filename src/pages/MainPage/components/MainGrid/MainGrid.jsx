/* eslint-disable import/no-absolute-path */
import React from "react";
import { Flux, Text } from "components";
import PropTypes from "prop-types";
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
                <MainGridCard
                  src={image}
                  textChildren={title}
                  author={author}
                  createdAt={createdAt}
                  likesNum={likes.length}
                  commentsNum={comments.length}
                />
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
