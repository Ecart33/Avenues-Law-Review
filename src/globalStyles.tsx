import { createGlobalStyle } from 'styled-components';

import {
  BASE_FONT_SIZE,
  BASE_LINE_HEIGHT,
  fontFamily
} from './Design/Typography';

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: ${fontFamily.body};
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    margin: 0;
    font-size: ${BASE_FONT_SIZE}px;
    line-height: ${BASE_LINE_HEIGHT}px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// White: #ffffff
// Blue highlights: #002A58
// Light blue highlights: #78ADCA
