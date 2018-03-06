import React, {Component} from 'react';
import { connect } from 'dva';

import Header from './../../../components/computer/header/index';
import Copyright from './../../../components/computer/copyright/index';
import ShopTrick from './../../../assets/ShopTrick.png';
import Navigation from './navigation';

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

          <Navigation/>

          <div className="content-input-area">
            <div className="input-area-header">
              <img alt="用户信息收集" className="area-header-background" src={ShopTrick} />
              <h2>Diving Time 用户信息收集</h2>
            </div>
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
