import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'src/scenes/Home';
import { createGlobalStyle } from 'styled-components';

if (module.hot) {
  module.hot.accept();

  module.hot.dispose(() => {
    [].slice.apply(document.querySelector('#react_root').children).forEach(function(c) {
      c.remove();
    });
  });
}

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: #ececec;
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

const load = () => {
  ReactDOM.render(
    <>
      <Home />
      <GlobalStyles />
    </>,
    document.querySelector('#react_root')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
