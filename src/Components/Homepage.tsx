import React from 'react';

import { Header } from './Header';
import { Card } from './Card';
import { Article } from '../App';

import styles from './Homepage.module.scss';

export const Homepage:React.FC<{ articles: Article[] }> = ({ articles }) => {
  const notes = [{title: 'test 1', subtitle: 'test 1', author: 'mr perculant', tags: ['a', 'b', 'c']}, 
                 {title: 'test 2', subtitle: 'test 2', author: 'prof perculator', tags: ['a', 'b', 'c']},
                 {title: 'test 3', subtitle: 'test 3', author: 'prof perculator', tags: ['a', 'b', 'c']},
                 {title: 'test 4', subtitle: 'test 4', author: 'prof perculator', tags: ['a', 'b', 'c']}]


  return (
    <div className={styles.main}>
        <Header/>
        <div className={styles.cardLayout}>
            { articles.map(n => <Card title={n.title} subtitle={n.subtitle} author={n.author}/> ) }
        </div>
    </div>
  );
}
