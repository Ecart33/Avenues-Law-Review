// @ts-nocheck
import React, { useState, useCallback, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Box, Button } from '@material-ui/core';

import SaveIcon from '@material-ui/icons/Save';

import { KeyboardArrowUp } from '@material-ui/icons';

import {Title, Author, ArticleContainer, ArticleWrapper, Text, LineBreak, Cite, Meta, Line, FootnoteReference } from './styles';

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

const FootnoteRef: React.FC<{ index: string, footnotePosition?: (Number) => void, url: string }> = ({ index, footnotePosition, url }) => {
  const [rect, ref] = useClientRect();

  useEffect( () => {
    if (rect) {
      footnotePosition(rect.top + window.pageYOffset);
    }
 }, [rect]);

  return (
    <FootnoteReference ref={ref}>
      {url && <a href={url}>{index} </a>}
      {!url && <a>{index}</a>}
    </FootnoteReference>
  )
}

const Citation: React.FC<{footnote: string, index: string, position?: Number, footnotePosition?: (Number) => void}> = ({footnote, index, position, footnotePosition}) => {
  const [rect, ref] = useClientRect();

  useEffect( () => {
    if (rect) {
      footnotePosition(rect.bottom-rect.top);
    }
  }, [rect]);

  const themes = {
    left: index % 2,
    top: position ? position : undefined
  }

  return (
      <Cite theme={themes} ref={ref}>
       <Line>{footnote}</Line>
      </Cite>

  )
}


const ContentWrapper: React.FC<{article: Article.article.article}> = ({ article }) => {
  const [footnotePositions, setFootnotePositions] = useState<Number[]>([]);
  const [formatedPositions, setFormatedPositions] = useState<Number[]>([]);
  const footnoteExtract = /(?<=\[).+?(?=\])/g;
  const urlExtract = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
  const processedArticle = article.map((x) => ([...x, x[1].match(urlExtract) ? x[1].match(urlExtract)[0] : '']));


  
  const updatePositions = (footnotePosition) => {
      console.log(`update @ ${footnotePosition}`);
      setFootnotePositions((footnotePositions) => [...footnotePositions, footnotePosition]);
  }

  function padPositions() {
    const placeHolder = [...footnotePositions]
    const positions = placeHolder.filter((x, i) => i % 2 == 0);
    const sizes = placeHolder.filter((x, i) => i % 2 != 0);
    //const formatedPositions = footnotePositions.map((x, i) => (zerodPos[i][1] > x[0]) ? x.map(y => y+=(zerodPos[i][1] - x[0] + 10)) : x );
    var format = [];
    var bottoms = [];
    positions.forEach((x, i) => {
      if(i>1){
        if(bottoms[i-2] > x) {
          format.push(x + bottoms[i-2] - x + 10)
          bottoms.push(x + bottoms[i-2]- x + 10 + sizes[i])
        } else {
          format.push(x)
          bottoms.push(x + sizes[i])
        }
      } else {
        format.push(x)
        bottoms.push(x + sizes[i])
      }
    })
    console.log(bottoms, format);
    return format
  }

  useEffect(() => {
    console.log(footnotePositions)
    setFormatedPositions(padPositions(footnotePositions))

  }, [footnotePositions])



  return (
    <>
      {processedArticle.map( (x, i) => (
        <span key={i}>
          { x[1]==='' ?
          <Line>{x[0]}<br/>&emsp;&emsp;</Line>
          :
          <>
            <Line>{x[0]}</Line>
            <FootnoteRef index={x[1].match(footnoteExtract)[0]} footnotePosition={updatePositions} url={x[2]}/>
            <Citation footnote={x[1]} index={x[1].match(footnoteExtract)[0]} position={formatedPositions && formatedPositions[x[1].match(footnoteExtract)[0]-1] } footnotePosition={updatePositions}/>
          </>
          }
        </span>
      ))}
    </>
  )
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
        <ContentWrapper article={article.article.article} />
      </ArticleContainer>

      {/* <SC.RightCite></SC.RightCite> */}
    </ArticleWrapper>
  );
};

// type CitationPropTypes = { footnote: Footnote };

type NotePagePropTypes = {
  article: Article;
};
