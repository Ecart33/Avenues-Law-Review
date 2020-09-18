import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Homepage } from './Pages/Homepage';
import { NotePage } from './Pages/NotePage';

import { Header } from './Layout/Header';

import { GlobalStyles } from './globalStyles';

export type Article = {
  author: string;
  footnotes: string[];
  subtitle: string;
  text: string[];
  title: string;
};

export const App = () => {
  const [notes, setNotes] = useState<Article[]>();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    // const response = await fetch('http://127.0.0.1:5000/');
    // const data = await response.json();
    const data = [
      {
        title: 'test 1',
        subtitle: 'test 1',
        author: 'mr perculant',
        text: ['123456'],
        footnotes: ['123456']
      },
      {
        title: 'test 2',
        subtitle: 'test 2',
        author: 'prof perculator',
        text: ['123456'],
        footnotes: ['123456']
      },
      {
        title: 'test 3',
        subtitle: 'test 3',
        author: 'prof perculator',
        text: ['123456'],
        footnotes: ['123456']
      },
      {
        title: 'test 4',
        subtitle: 'test 4',
        author: 'prof perculator',
        text: ['123456'],
        footnotes: ['123456']
      }
    ];
    setNotes(data);
  };

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/'>
          {notes && <Homepage articles={notes} />}
        </Route>
        {notes &&
          notes.map((n, i) => (
            <Route key={i} path={`/notes/${btoa(n.title)}`}>
              <NotePage article={n} />
            </Route>
          ))}
      </Switch>
    </Router>
  );
};
