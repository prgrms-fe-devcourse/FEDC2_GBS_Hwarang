import styled from "@emotion/styled";
import Common from "styles/common";

const PostListWrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const ListTitleWrapper = styled.div`
  margin: 20px 0;
`;

const PostListItemWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 240px;
  padding: auto 0;
  cursor: pointer;

  &:hover {
    background-color: ${Common.colors.gray06};
    transition: background-color 0.1s ease-out;
  }
`;

export default { PostListWrapper, ListTitleWrapper, PostListItemWrapper };