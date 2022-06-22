import styled from "@emotion/styled";
import Common from "styles/common";

const Select = styled.div`
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  user-select: none;
`;

const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const List = styled.ul`
  position: absolute;
  width: 100%;
  border: 1px solid ${Common.colors.gray05};
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  li:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export default {
  Select,
  Selected,
  List,
};
