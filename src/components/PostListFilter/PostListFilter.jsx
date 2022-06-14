import React from "react";
import Input from "components/Input";
import * as S from "./PostListFilter.style";
// import InputResult from "components/InputResult";

const PostListFilter = () => {
  // const [filterBtn, setFilterBtn] = useState(false);
  // const onBtnClick = () => setFilterBtn(!filterBtn);
  return (
    <div>
      <S.Wrapper>
        <Input
          style={{ fontSize: "15px", borderColor: "#ec5e58" }}
          placeholder="가고 싶은 여행지를 입력해보세요!"
          width="500px"
          height="60px"
        />
        <S.filterContainer>
          <S.searchSelected />

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
