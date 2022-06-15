import { PostList } from "components";
import React, { useEffect, useState } from "react";
import DummyData from "pages/MainPage/dummyData";
import Common from "styles/common";
import S from "./PostListPage.style";

const PostListPage = () => {
  const [folded, setFolded] = useState(false);

  const handleHeader = () => {
    if (window.pageYOffset > 700) {
      setFolded(true);
      return;
    }

    setFolded(false);
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        <PostList data={DummyData} listTitle="검색 결과" />
      </S.Section>
      <S.GotoTopButton
        width={50}
        height={50}
        backgroundColor={Common.colors.white}
        border
        color={Common.colors.main}
        onClick={() => {
          console.log("click");
          handleScroll();
        }}
      >
        Top
      </S.GotoTopButton>
    </S.PageWrapper>
  );
};

export default PostListPage;
