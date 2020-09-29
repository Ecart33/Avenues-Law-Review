import styled from 'styled-components';
import { AppBar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { BASE_FONT_SIZE } from '../../Design/Typography';

export const Bar = styled(AppBar)`
  color: red;
`;

export const B: any = styled(Button)`
  padding: 20px 50px;
  font-size: ${BASE_FONT_SIZE - 5}px;
`;

export const Logo = styled.img`
  padding: 20px 8px;
  width: 100px;
  height: 36px;
`;
