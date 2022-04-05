import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import {withRouter} from "react-router-dom";
import usePost from "../../hooks/post/usePost";

const PaginationBlock = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
`;
const PageNumber = styled.div``;

const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });
  return username ? `/@${username}?${query}` : `/?${query}`;
};
const Pagination = ({ location }) => {
// const Pagination = ({ page, lastPage, username, tag }) => {
  const { lastPage, posts, loading } = usePost('list');

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!posts || loading) return null;

  // page가 없으면 1을 기본값으로 사용
  const { tag, username, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const pageNum = Number(page);

  return (
    <PaginationBlock>
      <Button
        disabled={pageNum === 1}
        to={
          pageNum === 1 ? undefined : buildLink({ username, tag, page: pageNum - 1 })
        }
      >
        이전
      </Button>
      <PageNumber>{pageNum}</PageNumber>
      <Button
        disabled={pageNum === lastPage}
        to={
          pageNum === lastPage
            ? undefined
            : buildLink({ username, tag, page: pageNum + 1 })
        }
      >
        다음
      </Button>
    </PaginationBlock>
  );
};

export default withRouter(Pagination);
