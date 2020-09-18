import React from 'react';

import { Link } from 'react-router-dom';

import * as SC from './styles';

export const Card: React.FC<CardPropTypes> = ({ title, subtitle, author }) => {
  return (
    <Link to={`/notes/${btoa(title)}`}>
      <SC.Wrapper>
        <SC.Title>{title}</SC.Title>
        <SC.Subtitle>{subtitle}</SC.Subtitle>
        <SC.Author>{author}</SC.Author>
      </SC.Wrapper>
    </Link>
  );
};

type CardPropTypes = {
  title: string;
  subtitle: string;
  author: string;
};
