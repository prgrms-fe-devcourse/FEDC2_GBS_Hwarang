import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Text } from "components";
import InputResult from "components/InputResult";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import * as S from "./MainInput.style";

const MainInput = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const posts = useRecoilValue(allPost);

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "keyword") {
      setKeyword(value);
    }
  };

  const handleOnSearch = (searchKeyword) => {
    // input result에서의 click event와 함께 처리하고 싶었는데, 나중에 refactoring 시에
    // inputresult의 node를 동적으로 넘겨서 수정해야 겠습니다.
    navigate(`/travel-destination/all?keyword=${searchKeyword}`);
  };

  return (
    <S.MainInputContainer>
      <Input
        name="keyword"
        onChange={handleChange}
        width="100%"
        onSearch={handleOnSearch}
      />
      <InputResult
        inputType="post"
        type="none"
        keyword={keyword}
        data={posts.map((post) => {
          const { content } = post;
          return { ...content, _id: post._id, image: post.image };
        })}
        options={["title"]}
        width="100%"
        height="auto"
        maxHeight="250px"
      >
        <Text size="$b2" strong style={{ padding: "17px 10px 10px 10px" }}>
          추천 게시글👍
        </Text>
      </InputResult>
    </S.MainInputContainer>
  );
};
export default MainInput;
