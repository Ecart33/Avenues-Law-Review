import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Box } from '@material-ui/core';

import { Homepage } from './Pages/Homepage';
import { NotePage } from './Pages/NotePage';
import { AboutPage } from './Pages/AboutPage';

import { Header } from './Layout/Header';

import { GlobalStyles } from './globalStyles';

import { local_config } from './config.js';

type BackendUser = {
  id: number;
  firstname: string;
  lastname: string;
  username: string | undefined;
}

export type Article = {
  Abstract: string;
  Author: string;
  Title: string;
  article: {
    article:[string[]]
  };
  created_at: string;
  created_by: BackendUser;
  id: number;
  updated_at: string;
  updated_by: BackendUser;
  PDF: {
    id: number,
    name:string,
    alternativeText: string,
    caption: string,
    width: number | undefined,
    height: number | undefined,
    formats: string | undefined,
    hash: string,
    ext: string,
    mime: string,
    size: number,
    url: number,
    previewUrl: string | undefined,
    provider: string,
    provider_metadata: string | undefined,
    created_by: number,
    updated_by: number,
    created_at: string,
    updated_at: string
  }
};


export type TestArticle = {
  author: string;
  title: string;
  subtitle: string;
  text: string[];
  footnotes: string[];
};

export const App = () => {
  const [notes, setNotes] = useState<Article[]>([]);
  const [test, setTest] = useState<TestArticle>();

  const [tester, setTester] = useState();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const response = await fetch(local_config.apiURL);
    const data = await response.json();
    setNotes(data);
  };

 

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/'>
          {notes && (
            <Box>
              <Homepage articles={notes} />
            </Box>
          )}
        </Route>
        {notes &&
          notes.map((x, i) => (
            <Route key={i} path={`/notes/${btoa(x.Title)}`}>
              <NotePage article={x} />
            </Route>
          ))
        }
      </Switch>
    </Router>
  );
};
