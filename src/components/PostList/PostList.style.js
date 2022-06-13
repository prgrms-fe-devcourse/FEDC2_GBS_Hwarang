import styled from "@emotion/styled";
import Common from "styles/common";

const PostListWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 1px solid;
`;

const PostListItemWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  border: 1px solid;
  height: 240px;
  margin: 10px 0;
  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;

export default { PostListWrapper, PostListItemWrapper };