import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/main';
import { Router, Route, IndexRoute } from 'react-router';
import Template from './app-template';
import PageButton from './pages/page-button';
import PageCell from './pages/page-cell';
import TodoPage from './pages/page-todo';
import style from './style';

const WeUI = () => {
  return (
    <Router>
      <Route path="/" component={ Template }>
        <IndexRoute component={ App } />
        <Route path="button" component={ PageButton } />
        <Route path="cell" component={ PageCell } />
        <Route path="todo" component={ TodoPage } />
      </Route>
    </Router>
  );
}

ReactDOM.render(<WeUI />, document.getElementById('main'));