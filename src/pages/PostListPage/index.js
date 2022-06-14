import { Footer, PostList, PostListFilter } from "components";
import React from "react";
import DummyData from "pages/MainPage/dummyData";
import S from "./PostList.style";

const PostListPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default PostListPage;
