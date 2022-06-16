import styled from "@emotion/styled";
import Common from "styles/common";

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
  margin-top: 50px;
`;

export const searchSelected = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  /* 가로 스크롤 */
  /* white-space: nowrap;
  overflow-x: auto; */
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
  display: inline-block;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${Common.colors.main};
  }
<<<<<<< HEAD
  &.select {
    background-color: ${Common.colors.main};
    color: ${Common.colors.white};
  }
=======
>>>>>>> 6e784ff (feat:같은 검색어 추가 방지 코드 추가)
`;
