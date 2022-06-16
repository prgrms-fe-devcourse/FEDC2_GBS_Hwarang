import React, { useState } from "react";
import { Input, InputResult } from "components";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
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
      <Input
        name="keyword"
        onChange={handleChange}
        style={{ fontSize: "15px", borderColor: "#ec5e58" }}
        placeholder="가고 싶은 여행지를 입력해보세요!"
        width="500px"
        height="60px"
      />
      <InputResult
        inputType="filter"
        type="none"
        keyword={keyword}
        data={posts}
        options={["title"]}
        width="500px"
        height="175px"
      />
      {/* {console.log(`id:${posts}`)} */}
    </S.Container>
  );
};

export default PostListInput;
