import styled from "@emotion/styled";

const CardWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100% - 40px;
`;

const ImageDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-shrink: 1;
  border-radius: 5px;
  overflow: hidden;
`;

const TextDiv = styled.div`
  width: 100%;
  font-weight: bold;
`;

export default { CardWrapper, ImageDiv, TextDiv };
