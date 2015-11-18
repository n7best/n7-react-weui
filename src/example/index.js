import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/main';
import { Router, Route, IndexRoute } from 'react-router';
import Template from './app-template';
import PageButton from './pages/page-button';
import PageCell from './pages/page-cell';
import PageToast from './pages/page-toast';
import PageDialog from './pages/page-dialog';
import PageProgress from './pages/page-progress';
import PageMessage from './pages/page-message';
import PageArticle from './pages/page-article';
import PageActionsheet from './pages/page-actionsheet';
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
        <Route path="toast" component={ PageToast } />
        <Route path="dialog" component={ PageDialog } />
        <Route path="progress" component={ PageProgress } />
        <Route path="message" component={ PageMessage } />
        <Route path="article" component={ PageArticle } />
        <Route path="actionsheet" component={ PageActionsheet } />
      </Route>
    </Router>
  );
}

ReactDOM.render(<WeUI />, document.getElementById('main'));