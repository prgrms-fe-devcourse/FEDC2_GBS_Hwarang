import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Text, InputResult } from "components";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import { useTasks } from "contexts/TaskProvider";
import { useClickAway } from "hooks";
import * as S from "./MainInput.style";

const MainInput = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const posts = useRecoilValue(allPost);
  const { addTask } = useTasks();

  const ref = useClickAway(() => {
    setKeyword("");
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "keyword") {
      setKeyword(value);
    }
  };

  const handleOnSearch = (searchKeyword) => {
    addTask(searchKeyword, searchKeyword);
    navigate(`/travel-destination/all`);
  };

  return (
    <S.MainInputContainer ref={ref}>
      <Input
        name="keyword"
        onChange={handleChange}
        width="100%"
        height="75px"
        fontSize={15}
        onSearch={handleOnSearch}
        initialValue={keyword}
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
