import React, { useState } from "react";
import Input from "components/Input";
import InputResult from "components/InputResult";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import * as S from "./MainInput.style";

const MainInput = () => {
  const [keyword, setKeyword] = useState("");
  const posts = useRecoilValue(allPost);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "keyword") {
      setKeyword(value);
    }
  };

  return (
    <S.MainInputContainer>
      <Input
        name="keyword"
        onChange={handleChange}
        width="100%"
        height={75}
        borderColor="#FFFFFF"
      />
      <InputResult
        inputType="post"
        type="none"
        keyword={keyword}
        data={posts}
        options={["title"]}
        width="100%"
        height="175px"
      />
    </S.MainInputContainer>
  );
};
export default MainInput;
