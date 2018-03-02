import React, {Component} from 'react';
import { connect } from 'dva';
import { Route } from 'dva/router';

import main from './main/index';
import preview from './preview/index';
import result from './result/index';

class Computer extends Component {
  render() {
    let Page = {
      'main': main,
      'preview': preview,
      'result': result,
    }

    return (
      <Route exact path="/" component={Page[this.props.router]} />
    );
  }
}

const mapStateToProps = (state) => ({
  router: state.computer.router
})

export default connect(mapStateToProps)(Computer);
