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
        {data.map((post) => {
          const {
            _id,
            image,
            content,
            author,
            createdAt,
            likesNum,
            commentsNum,
          } = post;

          const handleOnClick = (id) => {
            alert(id);
          };

          return (
            <FluxCol key={_id}>
              <S.CardWrapper onClick={() => handleOnClick(_id)}>
                <MainGridCard
                  src={image || DEFAULT_COVER_IMAGE}
                  textChildren={content.title}
                  author={author.fullName}
                  createdAt={createdAt}
                  likesNum={likesNum}
                  commentsNum={commentsNum}
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
