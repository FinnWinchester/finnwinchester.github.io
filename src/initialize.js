import React from 'react';
import ReactDOM from 'react-dom';

import MainLayout from 'scenes/MainLayout';
import Home from 'scenes/Home';
import NotFound from 'scenes/NotFound';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

if (module.hot) {
  module.hot.accept();

  module.hot.dispose((data) => {
    data.counter = store.getState();
    [].slice.apply(document.querySelector('#react_root').children).forEach(function(c) {
      c.remove()
    });
  });
}

const load = () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home}></IndexRoute>
      </Route>
      <Route path="*" component={NotFound}></Route>
    </Router>, document.querySelector('#react_root'));
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
