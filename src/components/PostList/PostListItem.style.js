import styled from "@emotion/styled";

const ItemWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const createdTextWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export default { ItemWrapper, createdTextWrapper };
