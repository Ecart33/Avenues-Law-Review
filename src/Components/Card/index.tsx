import React from 'react';

import { Link } from 'react-router-dom';

import * as SC from './styles';

export const Card: React.FC<CardPropTypes> = ({ title, subtitle, author }) => (
  <SC.Wrapper>
    <Link to={`/notes/${btoa(title)}`} style={{ color: 'black' }}>
      <SC.Title>{title}</SC.Title>
    </Link>
    <SC.Subtitle>{subtitle}</SC.Subtitle>
    <SC.Author>{author}</SC.Author>
  </SC.Wrapper>
);

type CardPropTypes = {
  title: string;
  subtitle: string;
  author: string;
};
