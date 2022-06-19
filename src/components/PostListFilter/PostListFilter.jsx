/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import PostListInput from "components/PostListInput";
import { useTasks } from "contexts/TaskProvider";
// import { getChannels } from "api/post-api";
import * as S from "./PostListFilter.style";
import DeletableChip from "./DeletableChip";

const PostListFilter = () => {
  const { tasks, selectStandard, selectChannel } = useTasks();
  const [isChannelSelect, setIsChannelSelect] = useState([false]);
  const [isStandardSelect, setIsStandardSelect] = useState([false]);
  const channel = [
    "아시아",
    "유럽",
    "아프리카",
    "북아메리카",
    "남아메리카",
    "오세아니아",
  ];
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
            <S.channel>
              {channel.map((item, index) => (
                <S.styledButton
                  key={index}
                  onClick={() => handleClick("channel", index)}
                  className={isChannelSelect[index] ? "select" : "deselect"}
                >
                  {item}
                </S.styledButton>
              ))}
            </S.channel>
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
