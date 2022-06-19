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
