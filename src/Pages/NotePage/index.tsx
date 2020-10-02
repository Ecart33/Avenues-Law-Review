import React, { Fragment } from 'react';

import { Box } from '@material-ui/core';

import * as SC from './styles';

import { Article, TestArticle } from '../../App';

const tab = '        ';
export const NotePage: React.FC<NotePagePropTypes> = ({ article }) => {
  // const leftCitations: string[] = [];

  const paragraphs = article.text.join('').split('        ');

  console.log(paragraphs.join('\n\t'));
  return (
    <Box>
      {/* <SC.LeftCite></SC.LeftCite> */}
      <SC.ArticleContainer alignItems='center'>
        <SC.Title>{article.title}</SC.Title>
        <SC.Author>{article.author}</SC.Author>
        {paragraphs.map((x, i) => (
          <Fragment key={i + 200}>
            <SC.Text key={i + 100}>{tab + x}</SC.Text>
            <SC.LineBreak key={i} />
          </Fragment>
        ))}
        {article.footnotes && (
          <>
            <hr />
            <Box>
              {article.footnotes.map((x, i) => (
                <SC.CiteText key={i}>{x}</SC.CiteText>
              ))}
            </Box>
          </>
        )}
      </SC.ArticleContainer>

      {/* <SC.RightCite></SC.RightCite> */}
    </Box>
  );
};

// type CitationPropTypes = { footnote: Footnote };

type NotePagePropTypes = {
  article: Article | TestArticle;
};
