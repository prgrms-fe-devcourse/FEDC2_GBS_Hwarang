import React, { useState } from "react";
import { Input, InputResult } from "components";
import { getChannels } from "api/post-api";
import { useRecoilValue } from "recoil";
import { allPost } from "recoil/post";
import { useTasks } from "contexts/TaskProvider";
import { useClickAway } from "hooks";
import * as S from "./PostListInput.style";

const PostListInput = () => {
  const [keyword, setKeyword] = useState("");
  const [channels, setChannels] = useState([]);
  const posts = useRecoilValue(allPost);

  const { selectChannel } = useTasks();
  getChannels().then((res) => setChannels(res));

  const [show, setShow] = useState(true);

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

  const onChange = (e) => {
    const { value } = e.target;
    selectChannel(value);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.Select onChange={onChange}>
          <S.Option value="none">대륙 선택</S.Option>
          {channels.map((item) => (
            <S.Option key={item._id} value={item._id}>
              {item.name}
            </S.Option>
          ))}
        </S.Select>
        <Input
          name="keyword"
          onChange={handleChange}
          style={{ fontSize: "15px", border: "none" }}
          placeholder="가고 싶은 여행지를 입력해보세요!"
          width="500px"
          height="60px"
        />
      </S.InputContainer>
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
