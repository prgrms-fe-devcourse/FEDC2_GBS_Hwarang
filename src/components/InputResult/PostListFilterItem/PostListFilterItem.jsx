import React from "react";
import PropTypes from "prop-types";
import { useTasks } from "contexts/TaskProvider";
import * as S from "./PostListFilterItem.style";

const propTypes = {
  filter: PropTypes.instanceOf(Object),
};

const defaultProps = {
  filter: {},
};

const PostFilterItem = ({ filter, ...props }) => {
  const { addTask } = useTasks();
  const { _id, title } = filter;
  const handleonClick = (id, tit) => {
    addTask(id, tit);
  };

  return (
    <S.ListItem
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
