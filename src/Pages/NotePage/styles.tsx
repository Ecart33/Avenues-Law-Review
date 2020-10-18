import styled from 'styled-components';

import { Box } from '@material-ui/core';

import { BASE_FONT_SIZE } from '../../Design/Typography';

export const Cite = styled.div`
  border-top: 0.5px dotted grey;
  position: absolute;
  left: ${props => props.theme.left ? '19%' : '74%' };
  max-width: 7%;
  font-size: 10px;
  margin: 0;
  word-break: break-word;
  top: ${props => props.theme.top ? `${props.theme.top}px` : 'auto'};
`;


export const ArticleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  margin: 5% auto 0 auto;
  max-width: 45%;
`
export const Line = styled.p`
  margin: 0;
  padding: 0;
  display: inline;
`

export const ArticleContainer = styled.div`
  font-family: 'Nunito Sans', sans-serif;
`;

export const CiteText = styled.p`
  font-size: ${BASE_FONT_SIZE - 5}px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Author = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
  text-align: left;
  text-indent: 30px;
`;

export const LineBreak = styled.br`
  line-height: 5px;
`;

export const Meta = styled.div`
  position: absolute;
  left: 20%;
  max-width: 7%;
`
export const FootnoteReference = styled.span`
  border: 1px solid black;
  border-radius: 25%;
  font-size: 10px;
  vertical-align: top;
  > a {
    text-decoration: none;
  }
  &:visited,
  &:link {
    color: #00688B;
  }
`