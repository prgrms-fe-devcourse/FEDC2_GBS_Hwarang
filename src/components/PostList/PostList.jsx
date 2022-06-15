import { Text, Spinner } from "components";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import S from "./PostList.style";
import PostListItem from "./PostListItem";

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  listTitle: PropTypes.string.isRequired,
};

/* "검색 결과가 없을 때"에 대한 예외 처리 필요 */
const PostList = ({ data, listTitle }) => {
  const [renderData, setRenderData] = useState([]);
  const [page, setPage] = useState(0);
  const [lastIntersectingItem, setLastIntersectionItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completeData, setCompleteData] = useState(false);

  const getRenderData = () => {
    if (renderData.length === 0) return;

    setLoading(true);
    const addData = data.slice(page * 10, page * 10 + 10);

    if (addData.length === 0) {
      setLoading(false);
      setCompleteData(true);
    }

    const renderScrollData = [...renderData, ...addData];

    setRenderData(renderScrollData);
    setLoading(false);
  };

  const onIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setPage((prev) => prev + 1);
        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    if (data.length === 0) return;

    setRenderData(data.slice(page * 10, page * 10 + 10));
    setLoading(false);
  }, [data]);

  useEffect(() => {
    getRenderData();
  }, [page]);

  useEffect(() => {
    let observer;

    if (lastIntersectingItem) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastIntersectingItem);
    }

    return () => observer && observer.disconnect();
  }, [lastIntersectingItem]);

  return (
    <S.PostListWrapper>
      <S.ListTitleWrapper>
        <Text strong size="$b1">
          {listTitle}
        </Text>
      </S.ListTitleWrapper>
      {renderData.map((post, index) => {
        const { _id, image, title, author, createdAt, likes, comments } = post;

        const handleOnClick = (id) => {
          alert(id);
        };

        return index === renderData.length - 1 ? (
          <S.PostListItemWrapper key={_id} onClick={() => handleOnClick(_id)}>
            <PostListItem
              src={image}
              title={title}
              author={author}
              createdAt={createdAt}
              likesNum={likes.length}
              commentsNum={comments.length}
              ref={setLastIntersectionItem}
            />
          </S.PostListItemWrapper>
        ) : (
          <S.PostListItemWrapper key={_id} onClick={() => handleOnClick(_id)}>
            <PostListItem
              src={image}
              title={title}
              author={author}
              createdAt={createdAt}
              likesNum={likes.length}
              commentsNum={comments.length}
            />
          </S.PostListItemWrapper>
        );
      })}
      <S.LoadingWrapper>{loading ? <Spinner /> : null}</S.LoadingWrapper>
      {completeData ? (
        <S.NoDataWrapper>
          <Text
            strong
            style={{ width: "fit-content", margin: "0 auto" }}
            size="$c2"
          >
            😔 더 이상 불러올 데이터가 없습니다.
          </Text>
        </S.NoDataWrapper>
      ) : null}
    </S.PostListWrapper>
  );
};

PostList.propTypes = propTypes;

export default PostList;
