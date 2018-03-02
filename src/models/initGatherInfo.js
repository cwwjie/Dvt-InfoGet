import fetch from 'dva/fetch';
import config from './../config';

export default (app) => {
  getGatherInfo().then(val => {
    let gatherOrderItem = localStorage.getItem('loginSuccessful');

    if (val) {
      app._store.dispatch({
        'type': 'load/setGather',
        'gatherOrderItem': gatherOrderItem ? JSON.parse(gatherOrderItem) : {},
        'gatherInfo': val
      });
    }
  })
};

let getGatherInfo = () => {
  let uniqueKey = localStorage.getItem('_uniqueKey');
  let token = localStorage.getItem('_token');
  let digest = localStorage.getItem('_digest');

  return new Promise((resolve, reject) => {
    fetch(`${config.URLversion}/gather/link/${uniqueKey}/getGatherInfo.do`, {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json; charset=utf-8',
        'token': token,
        'digest': digest
      }
    }).then(
      response =>  response.json(),
      error => reject(`向服务器发起请求用户收集信息失败, 原因: ${error}`)
    )
    .then(val => {
      if (val.result === '0') {
        resolve(val.data ? val.data : false)
      } else {
        reject(`请求服务器成功, 但是获取的用户收集信息有误! 原因:${val.message}. 请联系客服!`)
      }
    })
    .catch(error => reject(`向服务器发起请求用户收集信息失败, 原因: ${error}`));
  })
}
