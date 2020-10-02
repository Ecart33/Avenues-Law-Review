import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Box } from '@material-ui/core';

import { Homepage } from './Pages/Homepage';
import { NotePage } from './Pages/NotePage';

import { Header } from './Layout/Header';

import { GlobalStyles } from './globalStyles';

import Trace from './Assets/Notes/Trace.json';

export type Article = {
  author: string;
  subtitle: string;
  text: string[];
  title: string;
  footnotes: string[];
};

export type TestArticle = {
  author: string;
  title: string;
  subtitle: string;
  text: string[];
  footnotes: string[];
};

export const App = () => {
  const [notes, setNotes] = useState<Article[]>();
  const [test, setTest] = useState<TestArticle>();

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
        footnotes: ['test']
      },
      {
        title: 'test 2',
        subtitle: 'test 2',
        author: 'prof perculator',
        text: ['123456'],
        footnotes: ['test']
      },
      {
        title: 'test 3',
        subtitle: 'test 3',
        author: 'prof perculator',
        text: ['123456'],
        footnotes: ['test']
      },
      {
        title: 'test 4',
        subtitle: 'test 4',
        author: 'prof perculator',
        text: ['123456'],
        footnotes: ['test']
      }
    ];
    const footnotes: string[] = [];
    const fixedText: string[] = [];
    Trace.text.forEach(([text, footnote]) => {
      fixedText.push(text);
      footnotes.push(footnote);
    });
    setTest({
      ...Trace,
      footnotes,
      text: fixedText
    });

    setNotes(data);
  };

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/'>
          {notes && (
            <Box>
              <Homepage articles={notes} />
            </Box>
          )}
        </Route>
        {notes &&
          notes.map((x, i) => (
            <Route key={i} path={`/notes/${btoa(x.title)}`}>
              <NotePage article={x} />
            </Route>
          ))}
        {test && (
          <Route path='/notes/test'>
            <NotePage article={test} />
          </Route>
        )}
      </Switch>
    </Router>
  );
};
