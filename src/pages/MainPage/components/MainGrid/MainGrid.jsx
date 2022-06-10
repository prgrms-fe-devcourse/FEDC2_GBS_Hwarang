import React from "react";
import Flux from "components/Flux";
import Text from "components/Text";
import PropTypes from "prop-types";
import MainGridWrapper from "./MainGrid.style";
import MainGridCard from "./MainGridCard";
/* 
<FluxCol span={4}>
  <MainGridCard
    src="https://file.mk.co.kr/meet/neds/2020/05/image_readtop_2020_506007_15897737584203733.jpg"
    textChildren={<Text strong>한국의 한옥 마을</Text>}
  />
</FluxCol>
*/

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

const MainGrid = ({ data }) => {
  const { FluxRow, FluxCol } = Flux;
  return (
    <MainGridWrapper>
      <FluxRow>
        {data.map((post) => {
          const { _id, image, title, author, createdAt } = post;
          return (
            <FluxCol key={_id}>
              <MainGridCard src={image} textChildren={<Text>{title}</Text>} />
              <Text>
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
