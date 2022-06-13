import styled from "@emotion/styled";
import Common from "styles/common";

const MainGridWrapper = styled.div`
  width: 1000px;
  height: auto;
  margin: 20px auto;
`;

const CardWrapper = styled.div`
  box-sizing: border-box;
  padding: 5px;

  &:hover {
    background-color: ${Common.colors.gray06};
    transition: background-color 0.3s ease-out;
  }
`;

const TextWrapper = styled.div`
  margin: 20px 0;
`;

export default { MainGridWrapper, CardWrapper, TextWrapper };
