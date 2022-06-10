import React from "react";
import Flux from "components/Flux";
import Text from "components/Text";
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
          const { _id, image, title, author, createdAt } = post;
          return (
            <FluxCol key={_id}>
              <MainGridCard src={image} textChildren={title} textSize="$b2" />
              <Text size="$c2">
                {author}, {createdAt}
              </Text>
            </FluxCol>
          );
        })}
      </FluxRow>
    </MainGridWrapper>
  );
};

MainGrid.propTypes = propTypes;

export default MainGrid;
