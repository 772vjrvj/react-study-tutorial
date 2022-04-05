import React, {useEffect} from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import { Helmet } from 'react-helmet-async';
import {withRouter} from "react-router-dom";
import usePost from "../../hooks/post/usePost";
import {readPost, unloadPost} from "../../modules/post";
import {setOriginalPost} from "../../modules/write";
import {removePost} from "../../lib/api/posts";
import PostActionButtons from "./PostActionButtons";

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;


const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ match, history }) => {
  const { postId } = match.params;
  const { post, error, user, loading, OnReadPost, OnUnLoadPost, OnSetOriginalPost } = usePost();

  useEffect(() => {
    OnReadPost(postId);
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      OnUnLoadPost();
    };
  }, [postId]);

  const onEdit = () => {
    OnSetOriginalPost(post);
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removePost(postId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !post) {
    return null;
  }

  const ownPost = (user && user._id) === (post && post.user._id);
  const { title, body, publishedDate, tags } = post;

  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title} - REACTERS</title>
      </Helmet>

      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={post.user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags}/>
      </PostHead>
      {ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default withRouter(PostViewer);
