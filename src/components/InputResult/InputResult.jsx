/* eslint-disable no-nested-ternary */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import PostListFilterItem from "./PostListFilterItem";
import * as S from "./InputResult.style";
import PostListItem from "./PostListItem";
import UserListItem from "./UserListItem";

const propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  data: PropTypes.instanceOf(Array),
  keyword: PropTypes.string,
  options: PropTypes.instanceOf(Array),
  inputType: PropTypes.string,
  type: PropTypes.oneOf(["all", "none"]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const defaultProps = {
  children: null,
  width: 300,
  height: 500,
  data: [],
  keyword: "",
  options: ["title"],
  inputType: "post",
  type: "none",
  maxHeight: null,
};

const InputResult = ({
  children,
  width,
  height,
  data,
  keyword,
  options,
  inputType,
  type,
  maxHeight,
}) => {
  const sizeStyle = {
    width,
    height,
    maxHeight,
  };

  const isNoneResult = keyword === "" && type === "none";
  const reusltData = useMemo(() => {
    if (keyword === "" && type === "all") return data;
    return data.filter((item) => {
      return options.some(
        (key) => item[key]?.toLowerCase().indexOf(keyword.toLowerCase()) >= 0
      );
    });
  }, [keyword, data]);

  return (
    <S.ResultWrap>
      {!isNoneResult && reusltData?.length > 0 && (
        <>
          {children}
          <S.Container style={sizeStyle}>
            {reusltData.map((item) => {
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
        </>
      )}
    </S.ResultWrap>
  );
};

InputResult.propTypes = propTypes;
InputResult.defaultProps = defaultProps;

export default InputResult;
