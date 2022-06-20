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
    if (channel.length !== 0 && channel !== "none") {
      let result = optionData.filter(
        (item) => String(item.channel._id) === channel
      );

      if (tasks.length !== 0 && optionData) {
        const titleSet = tasks.map((item) => item.title);
        result = result.filter((item) => titleSet.includes(item.content.title));
        // console.log(result);
      }
      console.log(result);
      setRenderData(result);
      // if (result.length) {
      //   setRenderData(result);
      // } else {
      //   검색결과없을시
      //   setRenderData();
      // }
      console.log(channel);
      return;
    }
    if (tasks.length !== 0 && optionData) {
      const titleSet = tasks.map((item) => item.title);
      const result = optionData.filter((item) =>
        titleSet.includes(item.content.title)
      );

      setRenderData(result);
      console.log(channel);
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
