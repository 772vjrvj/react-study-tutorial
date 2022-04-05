import React, {useEffect} from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import {withRouter} from "react-router-dom";
import useWrites from "../../hooks/write/useWrites";
import {updatePost, writePost} from "../../modules/write";

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const WriteActionButtons = ({ history }) => {

  const { title, body, tags, post, postError, originalPostId, OnUpdatePost, OnWritePost } = useWrites();

  const isEdit = !!originalPostId;

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      OnUpdatePost({ title, body, tags, id: originalPostId });
      return;
    }
    OnWritePost({
      title,
      body,
      tags,
    })
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteActionButtonsBlock>
      <StyledButton cyan onClick={onPublish}>
        포스트 {isEdit ? '수정' : '등록'}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default withRouter(WriteActionButtons);
