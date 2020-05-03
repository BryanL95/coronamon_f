import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './main/Main';
import Last from './main/Last';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/last-day">Last Day</Link>
        </li>
      </ul>
      <Route exact path="/" component={Main}/>
      <Route path="/last-day/:country?" component={Last}/>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
