import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, Box, Toolbar } from '@material-ui/core';

import Logo from '../../Assets/Images/LOGO_2C.png';

import { NavBar, B, HeaderWrap, AVLogo, InnerHead } from './styles';

export const Header: React.FC = () => (
  <HeaderWrap>
    <InnerHead>
      <AVLogo src='https://www.avenues.org/static/storyblok/59501/8bde45723e--200x71--ave-logo.png.webp' />
      <NavBar>
        <B style={{ backgroundColor: 'transparent', fontFamily: "'Nunito Sans', sans-serif" }} component={Link} to='/'>
          Home
        </B>
        <B style={{ backgroundColor: 'transparent', fontFamily: "'Nunito Sans', sans-serif" } } component={Link} to='/about'>
          About
        </B>
        <B style={{ backgroundColor: 'transparent', fontFamily: "'Nunito Sans', sans-serif" } } component={Link} to='/submit'>
          Submit
        </B>
        <B style={{ backgroundColor: 'transparent', fontFamily: "'Nunito Sans', sans-serif" } } component={Link} to='/order'>
          Order
        </B>
      </NavBar>
    </InnerHead>
  </HeaderWrap>
);
