import { PostList, PostListFilter } from "components";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useTasks } from "contexts/TaskProvider";
import { allPost, latestPost } from "recoil/post";
import S from "./PostListPage.style";
import ScrollTopButton from "./components/ScrollTopButton";

const PostListPage = () => {
  const data2 = useRecoilValue(allPost);
  console.log(data2);
  let data = useRecoilValue(latestPost);
  data = data.latestPost;
  const { tasks } = useTasks();

  // const standardFilter = (data) => {
  //   if (standard.length !== 0) {
  //     //
  //   }
  // }

  // const channelFilter = (data) => {
  //   let temp = [];
  //   if (channel.length !== 0) {
  //     temp = data.filter((item) => item.channel === channel);

  //   }

  // };
  let result = null;
  if (tasks.length !== 0) {
    const titleSet = tasks.map((item) => item.title);
    result = data.filter((item) => titleSet.includes(item.title));
  } else {
    result = data;
  }
  console.log(result);

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
    <div>
      <S.PageWrapper>
        <S.HeaderWrapper>
          <S.Header /* Header */ className={folded ? "fold__header" : ""}>
            <PostListFilter />
          </S.Header>
        </S.HeaderWrapper>
        <S.Section>
          <PostList data={result} listTitle="검색 결과" />
        </S.Section>
        <ScrollTopButton />
      </S.PageWrapper>
    </div>
  );
};

export default PostListPage;
