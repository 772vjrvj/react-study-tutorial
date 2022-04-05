import React from 'react';
import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import Editor from '../components/write/Editor';
import TagBox from "../components/write/TagBox";
import WriteActionButtons from "../components/write/WriteActionButtons";

const WritePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - REACTERS</title>
      </Helmet>
      <Editor />
      <TagBox />
      <WriteActionButtons />
    </Responsive>
  );
};

export default WritePage;
