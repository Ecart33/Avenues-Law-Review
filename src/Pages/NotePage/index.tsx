import React from 'react';
import * as SC from './styles';
import { Article } from '../../App';

//content as object that stores all text and footnotes and what not
type Footnote = {
  content: string;
  leftAlign: boolean;
};

const Citation: React.FC<CitationPropTypes> = ({ footnote }) => (
  <SC.LeftCite>
    <p>{footnote.content}</p>
  </SC.LeftCite>
);

const citeFormat = (footnotes: string[]): Footnote[] =>
  footnotes.map((citation, index) => ({
    content: citation,
    leftAlign: !!(index % 2),
    key: index
  }));

export const NotePage: React.FC<NotePagePropTypes> = ({ article }) => {
  const citations = citeFormat(article.footnotes);

  return (
    <div>
      <SC.ArticleContainer>
        {article.text.map((line, index) => (
          <Citation key={index} footnote={citations[index]} />
        ))}
      </SC.ArticleContainer>
    </div>
  );
};

type CitationPropTypes = { footnote: Footnote };

type NotePagePropTypes = {
  article: Article;
};
