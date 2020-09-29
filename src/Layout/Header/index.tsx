import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, Box, Toolbar } from '@material-ui/core';

import Logo from '../../Assets/Images/LOGO_2C.png';

import * as SC from './styles';

export const Header: React.FC = () => (
  <AppBar>
    <Box display='flex' justifyContent='center'>
      <Toolbar>
        <SC.Logo src='https://www.avenues.org/static/storyblok/59501/8bde45723e--200x71--ave-logo.png.webp' />
      </Toolbar>
      <Box display='flex'>
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
    </Box>
  </AppBar>
);
