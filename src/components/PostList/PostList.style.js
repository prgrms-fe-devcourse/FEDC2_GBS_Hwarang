import styled from "@emotion/styled";
import Common from "styles/common";

const PostListWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  border: 1px solid;
`;

const PostListItemWrapper = styled.div`
  box-sizing: border-box;
  border: 1px solid;
  height: 220px;
  margin: 20px;
  &:hover {
    background-color: ${Common.colors.gray06};
  }
`;

export default { PostListWrapper, PostListItemWrapper };
