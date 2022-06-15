<<<<<<< HEAD
import { Footer, PostList, PostListFilter } from "components";
=======
import { Footer, PostListFilter } from "components";
>>>>>>> 89d238a (feat:postListFilter 컴포넌트 생성)
import React from "react";
import DummyData from "pages/MainPage/dummyData";
import TaskProvider from "contexts/TaskProvider";
import S from "./PostList.style";

const PostListPage = () => {
  return (
    <div>
<<<<<<< HEAD
      <TaskProvider>
        <S.Header /* Header */>
          <PostListFilter />
          <buttonSection>
            {/* 검색 기준 */}
            <div className="selected-options" /* 고른 options */ />
            <div className="options" /* 고를 수 있는 options */ />
          </buttonSection>
        </S.Header>
        <S.Section /* PostList 렌더링 */>
          <PostList data={DummyData} listTitle="검색 결과" />
        </S.Section>
        <Footer />
      </TaskProvider>
=======
      <S.Header /* Header */>
        <PostListFilter />
        <buttonSection>
          {/* 검색 기준 */}
          <searchOptionsSelected /* 고른 options */ />
          <searchOptions /* 고를 수 있는 options */ />
        </buttonSection>
      </S.Header>
      <S.Section /* PostList 렌더링 */>
        <postList /* 검색 결과에 따른 PostList */ />
      </S.Section>
      <Footer />
>>>>>>> 89d238a (feat:postListFilter 컴포넌트 생성)
    </div>
  );
};

export default PostListPage;
