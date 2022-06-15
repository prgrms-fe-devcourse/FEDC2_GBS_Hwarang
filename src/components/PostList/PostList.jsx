import { Text } from "components";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import S from "./PostList.style";
import PostListItem from "./PostListItem";

const propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  listTitle: PropTypes.string.isRequired,
};

const PostList = ({ data, listTitle }) => {
  const [renderData, setRenderData] = useState([]);
  const [page, setPage] = useState(0);
  const [lastIntersectingItem, setLastIntersectionItem] = useState(null);

  const getRenderData = () => {
    if (renderData.length === 0) return;

    const renderScrollData = [
      ...renderData,
      ...data.slice(page * 10, page * 10 + 10),
    ];

    setRenderData(renderScrollData);
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
    setRenderData(data.slice(0, 10));
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
    </S.PostListWrapper>
  );
};

PostList.propTypes = propTypes;

export default PostList;
