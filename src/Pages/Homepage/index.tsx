import React from 'react';

import { Card } from '../../Components/Card';
import { Article } from '../../App';

import * as SC from './styles';

export const Homepage: React.FC<HomepagePropTypes> = ({ articles }) => {
  console.log(articles);
  return (
  <SC.Main>
    <SC.CardLayout>
      {articles.map((n, i) => (
        <Card key={i} title={n.Title} subtitle={n.Abstract} author={n.Author} />
      ))}
    </SC.CardLayout>
  </SC.Main>
  )
      };

type HomepagePropTypes = {
  articles: any[];
};
