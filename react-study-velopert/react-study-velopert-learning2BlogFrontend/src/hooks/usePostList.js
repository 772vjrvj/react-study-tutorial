import {useDispatch, useSelector} from "react-redux";
import {listPosts} from "../modules/posts";
import {useCallback} from "react";

export default function usePostList(){

  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  const dispatch = useDispatch();
  const onListPosts = useCallback((tag, username, page) => dispatch(listPosts({ tag, username, page })),[dispatch]);

  return {
    posts, error, loading, user, onListPosts
  }
}

