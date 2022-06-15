import React from "react";
import PropTypes from "prop-types";
import { useTasks } from "contexts/TaskProvider";
import * as S from "./PostListFilterItem.style";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  filter: PropTypes.instanceOf(Object),
};

const defaultProps = {
  width: "100%",
  filter: {},
};

const PostFilterItem = ({ width, filter, ...props }) => {
  const sizeStyle = {
    width,
  };
  const { addTask } = useTasks();
  const { _id, title } = filter;
  const handleonClick = (id, tit) => {
    addTask(id, tit);
    // 이미 context에 있는 id는 추가하고 싶지 않다.
    // tasks.map((item) =>
    //   // if(item.id === id)return
    // );
    // context 에 들어있는 배열로 qpi 요청
  };

  return (
    <S.ListItem
      style={sizeStyle}
      onClick={() => {
        handleonClick(_id, title);
      }}
      {...props}
    >
      {filter.title}
    </S.ListItem>
  );
};

PostFilterItem.propTypes = propTypes;
PostFilterItem.defaultProps = defaultProps;

export default PostFilterItem;
