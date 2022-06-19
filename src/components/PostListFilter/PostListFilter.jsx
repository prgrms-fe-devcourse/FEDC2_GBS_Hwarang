/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import PostListInput from "components/PostListInput";
import { useTasks } from "contexts/TaskProvider";
import * as S from "./PostListFilter.style";
import DeletableChip from "./DeletableChip";

const PostListFilter = () => {
  const { tasks, selectStandard, selectChannel } = useTasks();
  const [isStandardSelect, setIsStandardSelect] = useState([false]);

  const standard = [
    "인기순",
    "최신순",
    "오래된 순",
    "가봤슈 추천순",
    "댓글 많은 순",
  ];
  const handleClick = (arr, idx) => {
    const newArr = Array(arr.length).fill(false);
    newArr[idx] = true;
    if (arr === "channel") {
      setIsChannelSelect(newArr);
      selectChannel(idx);
    } else {
      setIsStandardSelect(newArr);
      selectStandard(standard[idx]);
    }
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
                <S.styledButton
                  key={index}
                  onClick={() => handleClick("standard", index)}
                  className={isStandardSelect[index] ? "select" : "deselect"}
                >
                  {item}
                </S.styledButton>
              ))}
            </S.filterStandard>
          </S.searchOptions>
        </S.filterContainer>
      </S.Wrapper>
    </div>
  );
};
export default PostListFilter;
