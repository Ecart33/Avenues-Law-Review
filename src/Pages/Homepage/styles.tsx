import styled from 'styled-components';

import { Card } from '../../Components/Card';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 5% 20% 0 20%;
`;

export const C = styled(Card);
