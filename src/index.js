import React from 'react';
import ReactDOM from 'react-dom';

import App from 'src/App';

if (module.hot) {
  module.hot.accept();

  module.hot.dispose(() => {
    [].slice.apply(document.querySelector('#react_root').children).forEach(function(c) {
      c.remove();
    });
  });
}

const load = () => {
  ReactDOM.render(<App />, document.querySelector('#react_root'));
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
