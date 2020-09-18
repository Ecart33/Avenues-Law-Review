import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const Wrapper = styled.div`
  border-bottom: 0.05em solid black;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Title = styled(Button)`
  flex: 2;
`;

export const Label = styled(Button)`
  flex: 2;
`;

export const NavItem: any = styled(Button)`
  flex: 1;
`;
