import { PostList, PostListFilter } from "components";
import React, { useEffect, useState, useRef } from "react";
import { useRecoilValue } from "recoil";
<<<<<<< HEAD
import { useTasks } from "contexts/TaskProvider";
import { allData, postList } from "recoil/post";
import { useParams } from "react-router-dom";
=======
import { allPost } from "recoil/post";
>>>>>>> 4157fb8b8e7a1b0e938fbabd94e910df55428eda
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";
import FilteredResult from "./components/FilteredResult";

const PostListPage = () => {
<<<<<<< HEAD
  const data = useRecoilValue(allData);
  const postListData = useRecoilValue(postList);

  /* 1. 검색 options */
  const { tasks } = useTasks();

  /* 2. Params 이용한 검색 Sorting options */
  const { Options } = useParams();
  const [optionData, setOptionData] = useState([]);

  /* 3. 최종적으로 보여지는 필터링 된 데이터 */
  const [renderData, setRenderData] = useState([]);

  /* Header Fold */
  const [folded, setFolded] = useState(false);

  useEffect(() => {
    if (tasks.length !== 0 && optionData) {
      const titleSet = tasks.map((item) => item.title);
      const result = optionData.filter((item) => titleSet.includes(item.title));

      setRenderData(result);
      return;
    }

    setRenderData(optionData);
  }, [tasks, optionData]);
=======
  const data = useRecoilValue(allPost);
  const renderData = useRef([]);
  // const result = useRef([]);
  const [folded, setFolded] = useState(false);

  const result = FilteredResult(data);

  // useEffect(() => {
  //   result.current = getFiltered;
  //   console.log(result.current);
  // }, [data, getFiltered]);

  useEffect(() => {
    if (result.length !== 0) {
      renderData.current = result;
      console.log(data);
      return;
    }
    renderData.current = data;
  }, [result, renderData.current]);
>>>>>>> 4157fb8b8e7a1b0e938fbabd94e910df55428eda

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

  useEffect(() => {
    if (!Options) {
      setOptionData(data);
      return;
    }

    setOptionData(postListData[Options]);
  }, [Options, postListData]);

  return (
    <div>
      <S.PageWrapper>
        <S.HeaderWrapper>
          <S.Header /* Header */ className={folded ? "fold__header" : ""}>
            <PostListFilter folded={folded} />
          </S.Header>
        </S.HeaderWrapper>
<<<<<<< HEAD
        <S.Section /* PostList 렌더링 */>
          <PostList data={renderData} listTitle="검색 결과" />
=======
        <S.Section>
          <PostList data={renderData.current} listTitle="검색 결과" />
>>>>>>> 4157fb8b8e7a1b0e938fbabd94e910df55428eda
        </S.Section>
        <ScrollTopButton />
      </S.PageWrapper>
    </div>
  );
};

export default PostListPage;
