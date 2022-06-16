import { PostList, PostListFilter } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useTasks } from "contexts/TaskProvider";
import { allPost } from "recoil/post";
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";

const PostListPage = () => {
  const data = useRecoilValue(allPost);
  const { tasks } = useTasks();
  const [renderData, setRenderData] = useState([]);
  const [folded, setFolded] = useState(false);

  useEffect(() => {
    if (tasks.length !== 0) {
      const titleSet = tasks.map((item) => item.title);
      const result = data.filter((item) => titleSet.includes(item.title));

      setRenderData(result);
      return;
    }

    setRenderData(data);
  }, [tasks, data]);

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
            <PostListFilter folded={folded} />
          </S.Header>
        </S.HeaderWrapper>
        <S.Section /* PostList 렌더링 */>
          <PostList data={renderData} listTitle="검색 결과" />
        </S.Section>
        <ScrollTopButton />
      </S.PageWrapper>
    </div>
  );
};

export default PostListPage;
