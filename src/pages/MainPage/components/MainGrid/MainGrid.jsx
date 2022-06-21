/* eslint-disable import/no-absolute-path */
import React from "react";
import { Flux, Text } from "components";
import PropTypes from "prop-types";
import { DEFAULT_COVER_IMAGE } from "api/url";
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
        {data.map(
          ({ _id, image, content, author, createdAt, commentsNum, likes }) => {
            return (
              <FluxCol key={_id}>
                <S.CardWrapper>
                  <MainGridCard
                    src={image || DEFAULT_COVER_IMAGE}
                    textChildren={content.title}
                    author={author.fullName}
                    createdAt={createdAt}
                    commentsNum={commentsNum}
                    likes={likes}
                    id={_id}
                  />
                </S.CardWrapper>
              </FluxCol>
            );
          }
        )}
      </FluxRow>
    </S.MainGridWrapper>
  );
};

MainGrid.propTypes = propTypes;

export default MainGrid;
