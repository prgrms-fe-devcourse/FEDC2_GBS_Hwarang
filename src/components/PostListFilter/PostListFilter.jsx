import React from "react";
import PostListInput from "components/PostListInput";
import { useTasks } from "contexts/TaskProvider";

import * as S from "./PostListFilter.style";
import DeletableChip from "./DeletableChip";
// import InputResult from "components/InputResult";

const PostListFilter = () => {
  // const [filterBtn, setFilterBtn] = useState(false);
  // const onBtnClick = () => setFilterBtn(!filterBtn);
  const { tasks } = useTasks();
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
              <S.styledButton>아시아</S.styledButton>
              <S.styledButton>유럽</S.styledButton>
              <S.styledButton>아프리카</S.styledButton>
              <S.styledButton>북아메리카</S.styledButton>
              <S.styledButton>남아메리카</S.styledButton>
              <S.styledButton>아프리카</S.styledButton>
              <S.styledButton>오세아니아</S.styledButton>
            </S.channel>
            <S.filterStandard>
              <S.styledButton>인기순</S.styledButton>
              <S.styledButton>최신순</S.styledButton>
              <S.styledButton>오래된 순</S.styledButton>
              <S.styledButton>가봤슈 추천순</S.styledButton>
              <S.styledButton>댓글 많은 순</S.styledButton>
            </S.filterStandard>
          </S.searchOptions>
        </S.filterContainer>
      </S.Wrapper>
    </div>
  );
};
export default PostListFilter;
