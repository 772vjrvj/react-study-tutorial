import React from 'react';
import PostList from "../components/posts/PostList";
import Pagination from "../components/posts/Pagination";
import Header from "../components/common/Header";

const PostListPage = () => {
  return (
    <>
      <Header />
      <PostList />
      <Pagination />
    </>
  );
};

export default PostListPage;
