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
  const [renderData, setRenderData] = useState(undefined);
  const [page, setPage] = useState(0);
  const [lastIntersectingItem, setLastIntersectionItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [completeData, setCompleteData] = useState(false);

  const getRenderData = () => {
    if (!renderData) return;
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

  /* data 변경 */
  useEffect(() => {
    if (data.length === 0) return;
    setLoading(true);

    setRenderData(data.slice(0, 10));
    setPage(0);

    setLoading(false);
  }, [data]);

  useEffect(() => {
    if (page === 0) return;
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
      {renderData &&
        renderData.map((post, index) => {
          const {
            _id,
            image,
            content,
            author,
            createdAt,
            likesNum,
            commentsNum,
          } = post;

          const handleOnClick = (id) => {
            alert(id);
          };

          const ItemProps = {};
          if (index === renderData.length - 1) {
            ItemProps.ref = setLastIntersectionItem;
          }

          return (
            <S.PostListItemWrapper key={_id} onClick={() => handleOnClick(_id)}>
              <PostListItem
                src={
                  image ||
                  "	https://mygbs.s3.ap-northeast-2.amazonaws.com/user/Default+Cover+Image.png"
                }
                title={content.title || "Untitled"}
                author={author.fullName}
                createdAt={createdAt.slice(0, 10)}
                likesNum={likesNum}
                commentsNum={commentsNum}
                {...ItemProps}
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
            😔 더 이상 불러올 여행지가 없습니다.
          </Text>
        </S.NoDataWrapper>
      ) : null}
    </S.PostListWrapper>
  );
};

PostList.propTypes = propTypes;

export default PostList;
