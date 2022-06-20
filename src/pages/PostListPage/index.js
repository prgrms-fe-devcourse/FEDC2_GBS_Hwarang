import { PostList, PostListFilter } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useTasks } from "contexts/TaskProvider";
import { allData, postList } from "recoil/post";
import { useParams } from "react-router-dom";
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";

const PostListPage = () => {
  const data = useRecoilValue(allData);
  console.log(data);
  const postListData = useRecoilValue(postList);

  /* 1. 검색 options */
  const { tasks, channel } = useTasks();

  /* 2. Params 이용한 검색 Sorting options */
  const { Options } = useParams();

  const [optionData, setOptionData] = useState([]);

  /* 3. 최종적으로 보여지는 필터링 된 데이터 */
  const [renderData, setRenderData] = useState([]);

  /* Header Fold */
  const [folded, setFolded] = useState(false);

  useEffect(() => {
    /* Refactoring 예정  ->  Channel API 연동 및 함수 분리 */
    if (channel.length !== 0 && channel !== "none") {
      const channelFilterResult = optionData.filter(
        (item) => item.channel.name === channel
      );

      if (tasks.length !== 0) {
        const tasksTitle = tasks.map((task) => task.title);
        let result = [];

        tasksTitle.forEach((title) => {
          const filterData = channelFilterResult.filter(({ content }) => {
            if (!content || !content.title) return false;
            return content.title.includes(title);
          });

          result = [...result, ...filterData];
        });

        setRenderData(result);
        return;
      }
      setRenderData(channelFilterResult);
      return;
    }
    if (tasks.length !== 0 && optionData) {
      const tasksTitle = tasks.map((task) => task.title);
      let result = [];

      tasksTitle.forEach((title) => {
        const filterData = optionData.filter(({ content }) => {
          if (!content || !content.title) return false;
          return content.title.includes(title);
        });

        result = [...result, ...filterData];
      });

      setRenderData(result);
      return;
    }

    setRenderData(optionData);
  }, [tasks, optionData, channel]);

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

  useEffect(() => {
    console.log(renderData);
  }, [renderData]);

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
