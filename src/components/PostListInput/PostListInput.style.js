import styled from "@emotion/styled";
import Common from "styles/common";

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  background-color: ${Common.colors.white};
  border: 1px solid ${Common.colors.main};
  border-radius: 10px;
`;

export const ResultContainer = styled.div`
  text-align: "center";
  margin-left: 80px;
`;

export const Select = styled.select`
  font-size: "15px";
  border-radius: 10px;
  color: ${Common.colors.main};
  border: none;
  outline: none;
`;

export const Option = styled.option`
  color: ${Common.colors.main};
`;
