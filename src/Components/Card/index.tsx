import React from 'react';

import { Link } from 'react-router-dom';

import * as SC from './styles';
//DESIGNATE HIEGHT FOR EACH ROW BASED OFF HEIGHT OFF TALLEST ITEM IN ROW
export const Card: React.FC<CardPropTypes> = ({ title, subtitle, author }) => (
  <SC.Wrapper variant='outlined'>
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
