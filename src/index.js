import dva from 'dva';
import fetch from 'dva/fetch';

import 'antd-mobile/dist/antd-mobile.less';
import './index.less';

import loadModel from './models/load';
import routes from './routes';

const app = dva();

app.model(loadModel);

app.router(routes);

document.getElementById('loading').innerHTML = '';

app.start('#root');
