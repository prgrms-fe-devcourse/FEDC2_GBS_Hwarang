import { PostList, PostListFilter } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useTasks } from "contexts/TaskProvider";
import { postListPosts } from "recoil/post";
import { useParams } from "react-router-dom";
import { useSorting } from "hooks";
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";

const PostListPage = () => {
  const initialAllPost = useRecoilValue(postListPosts);
  const { tasks, channel } = useTasks();
  const { Options } = useParams();
  const [optionPosts, setOptionPosts] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [folded, setFolded] = useState(false);

  // 1) 필터링
  useEffect(() => {
    if (!initialAllPost) return;

    let result = [];
    if (channel)
      result = initialAllPost.filter((post) => post.channel._id === channel);
    else {
      result = [...initialAllPost];
    }

    /* 필터링 기준 (키워드 또는 제목) */
    let filteredResult = [];

    if (tasks.length !== 0) {
      const tasksTitle = tasks.map((task) => task.title);
      tasksTitle.forEach((title) => {
        const filterData = result.filter(({ content }) => {
          if (!content || !content.title) return false;
          return content.title.includes(title);
        });

        filteredResult = [...filteredResult, ...filterData];
      });

      setOptionPosts(filteredResult);
      return;
    }

    setOptionPosts(result);
  }, [tasks, initialAllPost, channel]);

  useEffect(() => {
    if (!optionPosts) return;
    if (!Options || Options === "all") {
      setRenderData(optionPosts);
      return;
    }

    const sortedRenderData = useSorting(optionPosts, Options);
    setRenderData(sortedRenderData);
  }, [optionPosts, Options]);

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
            <PostListFilter folded={folded} options={Options} />
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
