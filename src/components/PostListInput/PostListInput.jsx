import React, { useState } from "react";
import { Input, InputResult } from "components";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import { useClickAway } from "hooks";
import * as S from "./PostListInput.style";

const PostListInput = () => {
  const [keyword, setKeyword] = useState("");
  const [show, setShow] = useState(true);
  const posts = useRecoilValue(allPost);

  const ref = useClickAway((e) => {
    if (!e) setShow(false);
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name === "keyword") {
      setKeyword(value);

      if (!show) setShow(true);
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
        // onSubmit={console.log("hello")}
      />
      <S.ResultWrapper ref={ref} style={{ display: show ? "block" : "none" }}>
        <InputResult
          inputType="filter"
          type="none"
          keyword={keyword}
          data={posts}
          options={["content"]}
          width="500px"
          height="150px"
          border
        />
      </S.ResultWrapper>
      {/* {console.log(`id:${posts}`)} */}
    </S.Container>
  );
};

export default PostListInput;
