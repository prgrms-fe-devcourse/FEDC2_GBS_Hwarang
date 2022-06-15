import { PostList } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";

const PostListPage = () => {
  const data = useRecoilValue(allPost);
  const [folded, setFolded] = useState(false);

  /* Header fold */
  const handleHeader = () => {
    if (window.pageYOffset > 700 && folded === false) {
      setFolded(true);
      return;
    }

    setFolded(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleHeader);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  return (
    <S.PageWrapper>
      <S.HeaderWrapper>
        <S.Header /* Header */ className={folded ? "fold__header" : ""}>
          <S.HeaderInput
            className={folded ? "fold__input" : ""}
            placeholder="가고 싶은 여행지를 입력해주세요!"
          />
          <div className="select-area">
            {/* 검색 기준 */}
            <div className="selected-options" /* 고른 options */ />
            <div className="options" /* 고를 수 있는 options */ />
          </div>
        </S.Header>
      </S.HeaderWrapper>
      <S.Section /* PostList 렌더링 */>
        <PostList data={data} listTitle="검색 결과" />
      </S.Section>
      <ScrollTopButton />
    </S.PageWrapper>
  );
};

export default PostListPage;
