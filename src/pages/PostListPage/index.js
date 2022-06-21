import { PostList, PostListFilter, Text, Spinner } from "components";
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
  const { tasks, channel, removeAll } = useTasks();
  const { Options } = useParams();
  const [optionPosts, setOptionPosts] = useState(undefined);
  const [renderData, setRenderData] = useState([]);
  const [folded, setFolded] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => removeAll();
  }, []);

  // 1) 필터링
  useEffect(() => {
    if (initialAllPost.length === 0) {
      setLoading(true);
      return;
    }

    setLoading(false);
    let result = [];
    if (channel)
      result = initialAllPost.filter((post) => post.channel._id === channel);
    else {
      result = [...initialAllPost];
    }

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
    if (optionPosts.length === 0) {
      setNoResult(true);
      return;
    }

    setNoResult(false);

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
          {loading ? (
            <S.LoadingWrapper>
              <Spinner />
            </S.LoadingWrapper>
          ) : (
            <div />
          )}
          {noResult ? (
            <S.NoDataWrapper>
              <Text
                strong
                style={{ width: "fit-content", margin: "0 auto" }}
                size="$c2"
              >
                😔 검색된 여행지가 없습니다.
              </Text>
            </S.NoDataWrapper>
          ) : (
            <PostList data={renderData} listTitle="검색 결과" />
          )}
        </S.Section>
        <ScrollTopButton />
      </S.PageWrapper>
    </div>
  );
};

export default PostListPage;
