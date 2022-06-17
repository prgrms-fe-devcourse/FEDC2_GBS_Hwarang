import { PostList, PostListFilter } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";
import FilteredResult from "./components/FilteredResult";

const PostListPage = () => {
  const data = useRecoilValue(allPost);
  const [renderData, setRenderData] = useState([]);
  const [folded, setFolded] = useState(false);

  useEffect(() => {
    if (FilteredResult(data)) {
      setRenderData(FilteredResult);
      return;
    }
    setRenderData(data);
  }, []);

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
    <div>
      <S.PageWrapper>
        <S.HeaderWrapper>
          <S.Header /* Header */ className={folded ? "fold__header" : ""}>
            <PostListFilter />
          </S.Header>
        </S.HeaderWrapper>
        <S.Section>
          <PostList data={renderData} listTitle="검색 결과" />
        </S.Section>
        <ScrollTopButton />
      </S.PageWrapper>
    </div>
  );
};

export default PostListPage;
