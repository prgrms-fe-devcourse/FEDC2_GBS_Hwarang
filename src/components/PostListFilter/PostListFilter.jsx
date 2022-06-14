import React, { useState } from "react";
import Input from "components/Input";
import Button from "components/Button";
import * as S from "./PostListFilter.style";
// import Common from "~/styles/common";
// import InputResult from "components/InputResult";

const PostListFilter = () => {
  const [filterBtn, setFilterBtn] = useState(false);
  const onBtnClick = () => setFilterBtn(!filterBtn);
  return (
    <div>
      <S.Wrapper>
        <Input
          placeholder="가고 싶은 여행지를 입력해보세요"
          width="749px"
          height="84px"
        />
        <S.filterContainer>
          <Button onClick={onBtnClick} />
          {console.log(filterBtn)}
        </S.filterContainer>
      </S.Wrapper>
    </div>
  );
};
export default PostListFilter;
