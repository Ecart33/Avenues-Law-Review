// @ts-nocheck
import React, { useState, useCallback } from 'react';

import { Link } from 'react-router-dom';

import { Box, Button } from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';

import { KeyboardArrowUp } from '@material-ui/icons';

import {Title, Author, ArticleContainer, ArticleWrapper, Text, LineBreak, LeftCite, RightCite, Meta, Line, FootnoteReference } from './styles';

import { Article, TestArticle } from '../../App';

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

const FootnoteRef: React.FC<{ index: string }> = ({ index }) => {
  const [rect, ref] = useClientRect();

  return (
    <FootnoteReference ref={ref}>
      {index}
      {rect !== null && console.log(rect.top)}
    </FootnoteReference>
  )
}

const Citation: React.FC<{footnote: string, index: string}> = ({footnote, index}) => {
  if (Number(index) % 2 != 0) {
    return (
      <LeftCite>
        <Line>{footnote}</Line>
      </LeftCite>
    )
  } else {
    return (
      <RightCite>
       <Line>{footnote}</Line>
      </RightCite>
    )
  }
}

const ArticleParser = (textBlock: string[]) => {
  const text = textBlock[0];
  const citation = textBlock[1]
  const footnoteExtract = /(?<=\[).+?(?=\])/g;

  if(citation === '') {
    return (
      <span>
        <Line>{text}<br/>&emsp;&emsp;</Line>
      </span>
    )
  } else {
    const index = citation.match(footnoteExtract);
    return (
      <span>
        <Line>{text}</Line>
        <FootnoteRef index={index ? index[0] : ''}/>
        <Citation footnote={citation} index={index ? index[0] : ''}/>
      </span>
    )
  }
}

export const NotePage: React.FC<NotePagePropTypes> = ({ article }) => {

  return (
    <ArticleWrapper>
      <Meta>
        <Button startIcon={<SaveIcon />} href={`http://localhost:1337${article.PDF.url}`}>
          PDF
        </Button>
      </Meta>
      <ArticleContainer>
        <Title>{article.Title}</Title>
        <Author>{article.Author}</Author>
        {article.article.article.map( (x, i) => (
          ArticleParser(x)
        ))
        }
      </ArticleContainer>

      {/* <SC.RightCite></SC.RightCite> */}
    </ArticleWrapper>
  );
};

// type CitationPropTypes = { footnote: Footnote };

type NotePagePropTypes = {
  article: Article;
};
