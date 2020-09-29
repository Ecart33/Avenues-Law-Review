import React from 'react';

import { Box } from '@material-ui/core';

import * as SC from './styles';

import { Article, TestArticle } from '../../App';

export const NotePage: React.FC<NotePagePropTypes> = ({ article }) => {
  const leftCitations: string[] = [];

  return (
    <Box>
      <SC.LeftCite></SC.LeftCite>
      <SC.ArticleContainer alignItems='center'>
        <SC.Text>{article.text.join('')}</SC.Text>
      </SC.ArticleContainer>
      <SC.RightCite></SC.RightCite>
    </Box>
  );
};

type CitationPropTypes = { footnote: Footnote };

type NotePagePropTypes = {
  article: Article | TestArticle;
};
