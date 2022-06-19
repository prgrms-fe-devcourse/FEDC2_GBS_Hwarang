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

          const handleOnClick = (id) => {
            alert(id);
          };

          return (
            <FluxCol key={_id}>
              <S.CardWrapper onClick={() => handleOnClick(_id)}>
                <MainGridCard
                  src={image}
                  textChildren={title}
                  author={author}
                  createdAt={createdAt}
                  likesNum={likes}
                  commentsNum={comments}
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
