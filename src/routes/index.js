import React from 'react';
import { Router, Route } from 'dva/router';
import dynamic from 'dva/dynamic';

import IsMobileSide from './../utils/IsMobileSide';

import loadModel from './../models/load';

function RouterConfig({ history, app }) {

  loadModel.initGatherInfo(app);

  return (
    <Router history={history}>
      {browserRedirect(app)}
    </Router>
  );
}  

function browserRedirect(app) {

  if (IsMobileSide()) {
    const MobileComponent = dynamic({ app, component: () => import('./Mobile/index') });

    return (
      <Route exact path="/" component={MobileComponent} />
    )
  } else {
    const ComputerComponent = dynamic({ app, component: () => import('./Computer/index') });

    return (
      <Route exact path="/" component={ComputerComponent} />
    )
  }
}

export default RouterConfig;
