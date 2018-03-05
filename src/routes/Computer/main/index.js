import React, {Component} from 'react';
import { connect } from 'dva';

import Header from './../../../components/computer/header/index';
import Copyright from './../../../components/computer/copyright/index';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   // const _this = this;
  // }

  render() {
    return (
      <div className="Computer">

        <Header />

        <div className="Computer-content">

          <div className="content-input-area">
            <div className="input-area-header">
            </div>
          </div>

          <div className="content-navigation">
          </div>
        </div>

        <Copyright />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isFirst: state.load.isFirst,
  loadData: state.load.value
})

export default connect(mapStateToProps)(Main);
