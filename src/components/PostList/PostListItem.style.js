import styled from "@emotion/styled";

const ItemWrapper = styled.div`
  box-sizing: border-box;
  height: calc(100% - 20px);
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const titleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const createdTextWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const numWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
`;

export default { ItemWrapper, createdTextWrapper, numWrapper, titleWrapper };
