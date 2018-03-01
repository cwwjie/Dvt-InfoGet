import React, {Component} from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';

import config from './../../config';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return <div className="Home">手机端</div>
  }
}

const mapStateToProps = (state) => ({
  isFirst: state.load.isFirst,
  loadData: state.load.value
})

export default connect(mapStateToProps)(Home);
