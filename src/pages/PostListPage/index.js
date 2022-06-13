import { Footer, PostList } from "components";
import React from "react";
import DummyData from "pages/MainPage/dummyData";
import S from "./PostList.style";

const PostListPage = () => {
  return (
    <div>
      <S.Header /* Header */>
        <S.HeaderInput
          /* Input */
          placeholder="가고 싶은 여행지를 입력해주세요!"
        />
        <buttonSection>
          {/* 검색 기준 */}
          <searchOptionsSelected /* 고른 options */ />
          <searchOptions /* 고를 수 있는 options */ />
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
