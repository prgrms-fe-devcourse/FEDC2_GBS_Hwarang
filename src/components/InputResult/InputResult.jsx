/* eslint-disable no-nested-ternary */
import React from "react";
import PropTypes from "prop-types";
import PostListFilterItem from "./PostListFilterItem";
import * as S from "./InputResult.style";
import PostListItem from "./PostListItem";
import UserListItem from "./UserListItem";

const propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  data: PropTypes.instanceOf(Array),
  keyword: PropTypes.string,
  options: PropTypes.instanceOf(Array),
  inputType: PropTypes.string,
  type: PropTypes.oneOf(["all", "none"]),
};

const defaultProps = {
  width: 300,
  height: 500,
  data: [],
  keyword: "",
  options: ["title"],
  inputType: "post",
  type: "none",
};

const InputResult = ({
  width,
  height,
  data,
  keyword,
  options,
  inputType,
  type,
}) => {
  const sizeStyle = {
    width,
    height,
  };

  const isNoneResult = !keyword && type === "none";

  return (
    <div>
      {!isNoneResult && (
        <S.Container style={sizeStyle}>
          {data
            .filter((item) => {
              return options.some((key) => {
                if (key === "content" && !item[key].title) return;
                return key !== "content"
                  ? item[key].toLowerCase().indexOf(keyword.toLowerCase()) >= 0
                  : item[key].title
                      .toLowerCase()
                      .indexOf(keyword.toLowerCase()) >= 0;
              });
            })
            .map((item) => {
              const { _id } = item;
              return (
                <div key={_id}>
                  {inputType === "post" ? (
                    <PostListItem post={item} />
                  ) : inputType === "user" ? (
                    <UserListItem user={item} />
                  ) : (
                    <PostListFilterItem filter={item} />
                  )}
                </div>
              );
            })}
        </S.Container>
      )}
    </div>
  );
};

InputResult.propTypes = propTypes;
InputResult.defaultProps = defaultProps;

export default InputResult;
