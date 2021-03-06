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
        height="76px"
        onSearch={handleOnSearch}
        initialValue={keyword}
        style={{
          borderRadius: "30px",
          padding: "10px 20px",
          fontSize: "20px",
          backgroundColor: "rgba(255, 255, 255 ,1)",
          border: "none",
        }}
      />
      <S.MainInputResult>
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
          maxHeight="225px"
        >
          <Text size="$b3" strong style={{ padding: "50px 10px 10px 25px" }}>
            π μΆμ² κ²μκΈ
          </Text>
        </InputResult>
      </S.MainInputResult>
    </S.MainInputContainer>
  );
};
export default MainInput;
