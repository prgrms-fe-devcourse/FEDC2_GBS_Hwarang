import { Footer, PostList, PostListFilter } from "components";
import React from "react";
import DummyData from "pages/MainPage/dummyData";
import TaskProvider from "contexts/TaskProvider";
import S from "./PostList.style";

const PostListPage = () => {
  return (
    <TaskProvider>
      <S.Header /* Header */>
        <PostListFilter />
      </S.Header>
      <S.Section /* PostList 렌더링 */>
        <PostList data={DummyData} listTitle="검색 결과" />
      </S.Section>
      <Footer />
    </TaskProvider>
  );
};

export default PostListPage;
