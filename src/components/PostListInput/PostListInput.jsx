import React, { useState } from "react";
import { Input, InputResult } from "components";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import Select from "pages/PostPage/components/Select";
import * as S from "./PostListInput.style";

const PostListInput = () => {
  const [keyword, setKeyword] = useState("");
  const posts = useRecoilValue(allPost);
  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "keyword") {
      setKeyword(value);
    }
  };
  return (
    <S.Container>
      <S.InputContainer>
        <Select />
        <Input
          name="keyword"
          onChange={handleChange}
          style={{ fontSize: "15px", border: "none" }}
          placeholder="가고 싶은 여행지를 입력해보세요!"
          width="500px"
          height="60px"
          // onSubmit={console.log("hello")}
        />
      </S.InputContainer>

      <InputResult
        inputType="filter"
        type="none"
        keyword={keyword}
        data={posts}
        options={["content"]}
        width="500px"
        height="175px"
      />
      {/* {console.log(`id:${posts}`)} */}
    </S.Container>
  );
};

export default PostListInput;
