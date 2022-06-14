import { Footer, PostListFilter } from "components";
import React from "react";
import S from "./PostList.style";

const PostListPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default PostListPage;
