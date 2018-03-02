import React, {Component} from 'react';
import { connect } from 'dva';

class Home extends Component {
  render() {
    return <div className="Home">手机端</div>
  }
}

const mapStateToProps = (state) => ({
  isFirst: state.load.isFirst,
  loadData: state.load.value
})

export default connect(mapStateToProps)(Home);
