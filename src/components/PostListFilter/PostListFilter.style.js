import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: calc(50% - 350px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const filterContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 700px;
  height: 250px;
  margin-top: 80px;
  border: 1px solid #ffc2c0;
`;

export const searchSelected = styled.div`
  border-bottom: 1px solid #ffc2c0;
`;

export const button = styled.button`
  width: 100px;
  color: red;
`;
