import dva from 'dva';

import 'antd-mobile/dist/antd-mobile.less';
import './index.less';

import load from './models/load';
import computerModel from './models/computer';
import mobileModel from './models/mobile';
import routes from './routes';

// import VConsole from 'vconsole';
// new VConsole();

const app = dva();

app.model(load.Model);
app.model(computerModel);
app.model(mobileModel);

app.router(routes);

document.getElementById('loading').innerHTML = '';

app.start('#root');
