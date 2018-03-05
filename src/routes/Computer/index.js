import React, {Component} from 'react';
import { connect } from 'dva';
import { Route } from 'dva/router';

import main from './main/index';
import preview from './preview/index';
import result from './result/index';

class Computer extends Component {
  render() {
    if (this.props.isLoadingCompleted === true) {
      let Page = {
        'main': main,
        'preview': preview, // 订单信息预览
        'result': result
      }
  
      return (
        <Route exact path="/" component={Page[this.props.router]} />
      );
    } else {

      // 加载失败
      if (
        this.props.isLoadingCompleted === false &&
        this.props.gatherOrderItem === false &&
        this.props.gatherInfo === false
      ) {
        return (
          <div>
            {this.props.loadingErrorMessage}
          </div>
        )
      } else {

        // 正在加载
        return (
          <div id="loading">
            <div className="loading">
              <div className="loader"><div><div><div><div><div><div></div></div></div></div></div></div></div>
            </div>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => ({
  'isLoadingCompleted': state.load.isLoadingCompleted,
  'loadingErrorMessage': state.load.loadingErrorMessage,
  'gatherOrderItem': state.load.gatherOrderItem,
  'gatherInfo': state.load.gatherInfo,
  'router': state.computer.router
});

export default connect(mapStateToProps)(Computer);
