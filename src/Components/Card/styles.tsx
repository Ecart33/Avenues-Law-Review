import styled from 'styled-components';

import { Card } from '@material-ui/core';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 350px;
  max-width: 350px;
  text-align: center;
  padding: 25px;
  margin: 25px;
  border-color: #d3d3d3;
`;

export const Title = styled.h1`
  flex: 1;
  color: #000000;
  &:visited,
  &:link {
    color: #00000;
  }
`;

export const Subtitle = styled.p`
  flex: 1;
`;

export const Author = styled.p`
  flex: 1;
`;
