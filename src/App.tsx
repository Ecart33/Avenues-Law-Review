import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Homepage } from  './Components/Homepage';
import { NotePage } from './Components/NotePage';

export interface Article {
  author: string,
  footnotes: string[]
  subtitle: string,
  text: string[],
  title: string,
}


function App() {
  const [notes, setNotes] = useState<Article[]>();
  
  useEffect(() => { 
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const response = await fetch('http://127.0.0.1:5000/');
    const data = await response.json();
    setNotes(data);
  }


  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {notes ? <Homepage articles={notes}/> : ''}
        </Route>
        {notes ? notes.map(n => 
          (<Route path={`/notes/${btoa(n.title)}`}>
            <NotePage article={n}/>
            </Route>)
        ) : ''}
      </Switch>
    </Router>
  );
}

export default App;