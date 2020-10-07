import styled from 'styled-components';
import { Card } from '@material-ui/core';
import React from 'react';

export const Wrapper = styled(Card)`
  display: inline;
  min-width: 47%;
  max-width: 47%;
  text-align: left;
  padding: 0 0 0 0.5em;
  margin: 1% 0.5% 1% 1%;
  border-color: #d3d3d3;
  * > p {
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export const Title = styled.p`
  flex: 1;
  font-style: italic;
  font-weight: bold;
  margin: 1em 0 0.5em 0;
  color: #000000;
  &:visited,
  &:link {
    color: #00000;
  }
`;

export const Subtitle = styled.p`
  flex: 1;
  margin: 0;
  color: #333333;
`;

export const Author = styled.p`
  color: #666666;
  flex: 1;
  font-size: 0.75em;
  font-style: italic;
  margin: 0.25em 0 0 0;
`;
