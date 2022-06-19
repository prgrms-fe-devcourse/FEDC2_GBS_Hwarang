/* eslint-disable react/no-array-index-key */
import React from "react";
import PostListInput from "components/PostListInput";
import { useTasks } from "contexts/TaskProvider";
import PropTypes from "prop-types";
import * as S from "./PostListFilter.style";
import DeletableChip from "./DeletableChip";

const propTypes = {
  folded: PropTypes.bool.isRequired,
  options: PropTypes.string.isRequired,
};

const PostListFilter = ({ folded, options }) => {
  const { tasks } = useTasks();
  const standard = [
    {
      title: "기본순",
      path: "all",
    },
    {
      title: "인기순",
      path: "popular",
    },
    {
      title: "최신순",
      path: "latest",
    },
    {
      title: "오래된 순",
      path: "oldest",
    },
    {
      title: "댓글 많은 순",
      path: "comments",
    },
  ];
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
            <S.filterStandard>
              {standard.map(({ title, path }, index) => (
                <S.LinkButton
                  key={index}
                  to={`/travel-destination/${path}`}
                  className={options === path ? "select" : "deselect"}
                  disabled
                >
                  {title}
                </S.LinkButton>
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
