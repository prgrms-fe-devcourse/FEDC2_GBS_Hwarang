import { PostList, PostListFilter } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import TaskProvider from "contexts/TaskProvider";
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
    window.addEventListener("scroll", handleHeader);

    return () => {
      window.removeEventListener("scroll", handleHeader);
    };
  }, []);

  return (
    <TaskProvider>
      <S.PageWrapper>
        <S.HeaderWrapper>
          <S.Header /* Header */ className={folded ? "fold__header" : ""}>
            <PostListFilter />
          </S.Header>
        </S.HeaderWrapper>
        <S.Section /* PostList 렌더링 */>
          <PostList data={data} listTitle="검색 결과" />
        </S.Section>
        <ScrollTopButton />
      </S.PageWrapper>
    </TaskProvider>
  );
};

export default PostListPage;
