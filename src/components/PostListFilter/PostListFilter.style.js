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
  height: 200px;
  margin-top: 80px;
  border: 1px solid #ffc2c0;
`;

export const searchSelected = styled.div`
  border-bottom: 1px solid #ffc2c0;
`;

export const searchOptions = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
`;

export const channel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const filterStandard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const styledButton = styled.button`
  border: 1px solid #cecece;
  border-radius: 18px;
  padding: 8px;
  margin-right: 15px;
  background-color: white;
  display: inline-block;
`;
