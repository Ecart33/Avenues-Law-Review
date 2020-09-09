import React from 'react';

import { Header } from './Components/Header';
import { Card } from './Components/Card';

import styles from './App.module.scss';

function App() {
  const notes = [{title: 'test 1', subtitle: 'test 2', author: 'mr perculant', tags: ['a', 'b', 'c']}]


  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.cardLayout}>
        { notes.map(n => <Card title={n.title} subtitle={n.subtitle} author={n.author} tags={n.tags}/> ) }
      </div>
    </div>
  );
}

export default App;