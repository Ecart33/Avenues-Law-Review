import styled from 'styled-components';
import { AppBar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { BASE_FONT_SIZE } from '../../Design/Typography';

export const Bar = styled(AppBar)`
  // margin-bottom: 0px;
  padding: 10px;
`;

export const B: any = styled(Button)`
  padding: 20px 50px;
  font-size: 25px;
`;

export const AVLogo = styled.img`
  width: 350px;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const InnerHead = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
`
export const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
`

export const HeaderWrap = styled.div`
  margin: 0 20% 0 20%;
  border-bottom: 0.05em solid black;
`