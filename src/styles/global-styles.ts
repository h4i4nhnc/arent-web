import { createGlobalStyle } from 'styled-components';
import './color-palette.scss';
import './font.scss';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    max-width: 1280px;
    margin: auto;
  }

  body {
    font-family: 'Noto SansCJK JP', Arial, sans-serif;

    .digit {
      font-family: 'Inter', Arial, sans-serif;
    }
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
