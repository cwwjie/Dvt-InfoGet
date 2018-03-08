import React, {Component} from 'react';
import { connect } from 'dva';

import ShopTrick from './../../../assets/ShopTrick.png';

import Header from './../../../components/computer/header/index';
import Copyright from './../../../components/computer/copyright/index';
import Navigation from './navigation';
import WavyLines from './wavyLines';
import Wechat from './wechat';
import OrderInfor from './orderInfor';
import GiftInfor from './giftInfor';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
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

            <Wechat />

            <OrderInfor />

            <WavyLines />

            <GiftInfor />

          </div>

        </div>

        <Copyright />

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(Main);
