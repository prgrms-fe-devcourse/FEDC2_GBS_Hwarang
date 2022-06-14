import React from "react";
import Input from "components/Input";
import Button from "components/Button";
import Common from "styles/common";
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
          {/* <Button
            onClick={onBtnClick}
            backgroundColor="white"
            width="300px"
            height="100px"
            style={{ borderColor: "red" }}
          /> */}
          <Button
            style={{}}
            backgroundColor="white"
            textSize={12}
            color={`${Common.colors.gray04}`}
          >
            아시아
          </Button>
        </S.filterContainer>
      </S.Wrapper>
    </div>
  );
};
export default PostListFilter;
