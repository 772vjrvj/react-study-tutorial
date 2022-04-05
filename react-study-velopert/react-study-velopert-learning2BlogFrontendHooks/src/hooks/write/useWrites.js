import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {changeField, initialize, updatePost, writePost} from "../../modules/write";

export default function useWrites(){

  const dispatch = useDispatch();
  const { title, body, tags, post, postError, originalPostId } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
    originalPostId: write.originalPostId,

  }));
  const OnChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);
  const OnInitialize = useCallback(() => dispatch(initialize()),[dispatch]);
  const OnUpdatePost = useCallback(payload => dispatch(updatePost(payload)),[dispatch]);
  const OnWritePost = useCallback(payload => dispatch(writePost(payload)),[dispatch]);

  return {
    title, body, tags, post, postError, originalPostId, OnChangeField, OnInitialize, OnUpdatePost, OnWritePost
  }
}

