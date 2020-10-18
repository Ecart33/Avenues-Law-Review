import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Button, Box, Toolbar } from '@material-ui/core';

import Logo from '../../Assets/Images/LawReviewLogo.png';

import { NavBar, B, HeaderWrap, AVLogo, InnerHead } from './styles';

export const Header: React.FC = () => (
  <HeaderWrap>
    <InnerHead>
      <AVLogo src={Logo} />
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
