import React from 'react';

import Home from 'src/scenes/Home';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: #ececec;
    padding: 0;
    margin: 0;
  }

  * {
    font-family: Roboto;
  }
  
  a {
    color: #3E3D40;
    text-decoration: none;
    
    :hover {
      text-decoration: underline;
    }
  }
  
  strong {
    font-weight: 900;
  }
`;
export default function App() {
  return (
    <>
      <Home />
      <GlobalStyles />
    </>
  );
}
