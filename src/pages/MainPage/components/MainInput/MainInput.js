import React, { useState } from "react";
import { Input, InputResult } from "components";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";

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
    <MainInput>
      <Input name="keyword" onChange={handleChange} width="100%" />
      <InputResult
        inputType="user"
        type="none"
        keyword={keyword}
        data={posts}
        options={["title"]}
        width="100%"
        height="80vh"
      />
    </MainInput>
  );
};
export default MainInput;
