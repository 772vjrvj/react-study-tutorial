import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {readPost, unloadPost} from "../../modules/post";
import {setOriginalPost} from "../../modules/write";
import {listPosts} from "../../modules/posts";

export default function usePost(type){

  const { lastPage, posts, post, error, loading, user } = useSelector(
    ({ post, loading, user, posts }) => ({
      post: post.post,
      error: post.error,
      loading: type === 'read'? loading['post/READ_POST'] : loading['posts/LIST_POSTS'],
      user: user.user,
      lastPage: posts.lastPage,
      posts: posts.posts,
    }),
  );

  const dispatch = useDispatch();
  const OnReadPost = useCallback((postId) => dispatch(readPost(postId)),[dispatch]);
  const OnUnLoadPost = useCallback(() => dispatch(unloadPost()),[dispatch]);
  const OnSetOriginalPost = useCallback((post) => dispatch(setOriginalPost(post)),[dispatch]);
  const OnListPosts = useCallback((tag, username, page) => dispatch(listPosts({ tag, username, page })),[dispatch]);

  return {
    lastPage, posts, post, error, loading, user, OnReadPost, OnUnLoadPost, OnSetOriginalPost, OnListPosts
  }
}

