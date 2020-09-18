import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button } from '@material-ui/core';

// import * as SC from './styles';

export const Header: React.FC = () => (
  <AppBar position='static'>
    <Button color='inherit' component={Link} to='/'>
      Home
    </Button>
    <Button color='inherit' component={Link} to='/'>
      About
    </Button>
    <Button color='inherit' component={Link} to='/'>
      Submit
    </Button>
  </AppBar>
);
