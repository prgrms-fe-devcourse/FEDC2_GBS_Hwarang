import React from "react";
import { Flux, Text, ToggleButton } from "components";
import PropTypes from "prop-types";
import MainGridWrapper from "./MainGrid.style";
import MainGridCard from "./MainGridCard";

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  mainTitle: PropTypes.string.isRequired,
};

const MainGrid = ({ data, mainTitle }) => {
  const { FluxRow, FluxCol } = Flux;
  return (
    <MainGridWrapper>
      <Text strong size="$b1">
        {mainTitle}
      </Text>
      <FluxRow>
        {data.map((post) => {
          const { _id, image, title, author, createdAt, likes, comments } =
            post;
          return (
            <FluxCol key={_id}>
              <MainGridCard src={image} textChildren={title} textSize="$b2" />
              <FluxRow padding="0 10px">
                <FluxCol span={8}>
                  <Text size="$c1">
                    {author}, {createdAt}
                  </Text>
                </FluxCol>
                <FluxCol span={2}>
                  <ToggleButton textSize="$c1">{likes.length}</ToggleButton>
                </FluxCol>
                <FluxCol span={2}>
                  <ToggleButton textSize="$c1">{comments.length}</ToggleButton>
                </FluxCol>
              </FluxRow>
            </FluxCol>
          );
        })}
      </FluxRow>
    </MainGridWrapper>
  );
};

MainGrid.propTypes = propTypes;

export default MainGrid;
