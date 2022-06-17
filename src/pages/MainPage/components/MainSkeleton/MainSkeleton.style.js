import styled from "@emotion/styled";

const MainGridWrapper = styled.div`
  width: 1000px;
  height: 557px;
  margin: 20px auto;
`;

const CardWrapper = styled.div`
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100% - 40px;
`;

const TextWrapper = styled.div`
  margin: 20px 0;
`;

export default { MainGridWrapper, CardWrapper, TextWrapper };
