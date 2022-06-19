/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import PostListInput from "components/PostListInput";
import { useTasks } from "contexts/TaskProvider";
// import { useParams } from "react-router-dom";
import * as S from "./PostListFilter.style";
import DeletableChip from "./DeletableChip";

const PostListFilter = () => {
  const { tasks } = useTasks();
  const [isStandardSelect, setIsStandardSelect] = useState([false]);
  // const { Options } = useParams();

  const standard = [
    "인기순", // popular
    "최신순", // latest
    "오래된 순", // oldest
    "가봤슈 추천순", // gbsrecommend
    "댓글 많은 순", // comment
  ];
  const handleClick = (arr, idx) => {
    const newArr = Array(arr.length).fill(false);
    newArr[idx] = true;
    setIsStandardSelect(newArr);
    // selectStandard(standard[idx]);
    // switch (idx) {
    //   case 0:

    //   case 1:
    //     setOption(1);
    //   case 2:
    //     setOption(2);
    // }
  };
  return (
    <div>
      <S.Wrapper>
        <PostListInput />
        <S.filterContainer>
          <S.searchSelected>
            {tasks.map((item) => (
              <DeletableChip key={item.id} id={item.id} content={item.title} />
            ))}
          </S.searchSelected>
          <S.searchOptions>
            <S.filterStandard>
              {standard.map((item, index) => (
                <S.LinkButton
                  key={index}
                  to="/travel-destination/latest"
                  onClick={() => handleClick("standard", index)}
                  className={isStandardSelect[index] ? "select" : "deselect"}
                >
                  {item}
                </S.LinkButton>
              ))}
            </S.filterStandard>
          </S.searchOptions>
        </S.filterContainer>
      </S.Wrapper>
    </div>
  );
};
export default PostListFilter;
