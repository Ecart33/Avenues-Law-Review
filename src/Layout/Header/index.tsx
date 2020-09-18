import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, Box } from '@material-ui/core';

import * as SC from './styles';

export const Header: React.FC = () => (
  <AppBar>
    <Box display='flex' justifyContent='center'>
      <SC.B component={Link} to='/'>
        Home
      </SC.B>
      <SC.B color='inherit' component={Link} to='/about'>
        About
      </SC.B>
      <SC.B color='inherit' component={Link} to='/submit'>
        Submit
      </SC.B>
    </Box>
  </AppBar>
);
