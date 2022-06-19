/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import PostListInput from "components/PostListInput";
import { useTasks } from "contexts/TaskProvider";
import PropTypes from "prop-types";
import * as S from "./PostListFilter.style";
import DeletableChip from "./DeletableChip";

const propTypes = {
  folded: PropTypes.bool.isRequired,
};

const PostListFilter = ({ folded }) => {
  const { tasks } = useTasks();
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
    } else {
      setIsStandardSelect(newArr);
    }
  };
  return (
    <div>
      <S.Wrapper>
        <S.InputWrapper className={folded ? "fold__input" : ""}>
          <PostListInput />
        </S.InputWrapper>
        <S.filterContainer className={folded ? "fold__filter-div" : ""}>
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

PostListFilter.propTypes = propTypes;

export default PostListFilter;
