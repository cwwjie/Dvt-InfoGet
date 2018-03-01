import React from 'react';
import { Router, Switch, Route } from 'dva/router';
import { connect } from 'dva';
import dynamic from 'dva/dynamic';

import Home from './Home/index';
import IsMobileSide from './../utils/IsMobileSide';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Route>
        <Switch>
          {browserRedirect(app)}
        </Switch>
      </Route>
    </Router>
  );
}  

function browserRedirect (app) {
  if (IsMobileSide()) {
    const MobileComponent = dynamic({ app, component: () => import('./Mobile/index') });
    return (
      <Route exact path="/" component={MobileComponent} />
    )
  } else {
    const HomeComponent = dynamic({ app, component: () => import('./Home/index') });
    return (
      <Route exact path="/" component={HomeComponent} />
    )
  }
}

export default RouterConfig;
