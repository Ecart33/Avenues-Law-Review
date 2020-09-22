import React from 'react';

import { Card } from '../../Components/Card';
import { Article } from '../../App';

import * as SC from './styles';

export const Homepage: React.FC<HomepagePropTypes> = ({ articles }) => (
  <SC.Main>
    <SC.CardLayout>
      {articles.map((n, i) => (
        <Card key={i} title={n.title} subtitle={n.subtitle} author={n.author} />
      ))}
    </SC.CardLayout>
  </SC.Main>
);

type HomepagePropTypes = {
  articles: Article[];
};
