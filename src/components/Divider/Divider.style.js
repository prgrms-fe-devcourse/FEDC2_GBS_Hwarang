import styled from "@emotion/styled";
import Common from "styles/common";

// eslint-disable-next-line
export const Line = styled.hr`
  border: 0;
  background-color: ${Common.colors.gray05};

  &.vertical {
    position: relative;
    top: -1;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;
