import styled from 'styled-components';

import { Box } from '@material-ui/core';

import { BASE_FONT_SIZE } from '../../Design/Typography';

export const LeftCite = styled.div`
  color: blue;
`;

export const RightCite = styled.div`
  color: red;
`;

export const ArticleContainer = styled(Box)`
  position: absolute;
  max-width: 50%;
  left: 50%;
  height: 500px;
  top: 30%;
  // min-width: 50%;
  transform: translate(-50%, -50%);
  // box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
`;

export const CiteText = styled.p`
  font-size: ${BASE_FONT_SIZE - 5}px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Author = styled.h2`
  text-align: center;
`;

export const Text = styled.p`
  text-align: left;
  text-indent: 30px;
`;

export const LineBreak = styled.br`
  line-height: 5px;
`;
