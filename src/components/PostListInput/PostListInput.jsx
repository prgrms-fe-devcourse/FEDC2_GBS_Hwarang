import React, { useState, useEffect } from "react";
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
  const { addTask, channel, setChannel } = useTasks();
  const posts = useRecoilValue(allPost);

  /* InputResult display attr */
  const [show, setShow] = useState(true);
  const clickAwayRef = useClickAway((e) => {
    if (!e) setShow(false);
  });

  useEffect(() => {
    const getChannelsList = async () => {
      const res = await getChannels();
      setChannels(res.data);
    };

    if (channels.length === 0) getChannelsList();
  }, [channels]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;

    if (name === "keyword") {
      setKeyword(value);
      if (!show) setShow(true);
    }
  };

  const handleOnSearch = () => {
    addTask(keyword, keyword);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setChannel(value);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.Select onChange={onChange} key={new Date()} value={channel}>
          <S.Option value="none">모든 대륙</S.Option>
          {channels.length !== 0 &&
            channels.map((item) => (
              <S.Option key={item._id} value={item._id}>
                {item.name}
              </S.Option>
            ))}
        </S.Select>
        <Input
          name="keyword"
          onChange={handleOnChange}
          style={{ fontSize: "15px", border: "none" }}
          placeholder="가고 싶은 여행지를 입력해보세요!"
          width="500px"
          height="50px"
          onSearch={handleOnSearch}
        />
      </S.InputContainer>
      <S.ResultWrapper
        ref={clickAwayRef}
        style={{ display: show ? "block" : "none" }}
      >
        <InputResult
          inputType="filter"
          type="none"
          keyword={keyword}
          data={posts.map((post) => {
            const { content } = post;
            return { ...content, _id: post._id, image: post.image };
          })}
          options={["title"]}
          width="610px"
          height="150px"
          border
        />
      </S.ResultWrapper>
    </S.Container>
  );
};

export default PostListInput;
