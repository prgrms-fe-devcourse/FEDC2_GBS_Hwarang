import styled from "@emotion/styled";

export const Col = styled.div`
  max-width: 100%;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export default { Col, Row };
