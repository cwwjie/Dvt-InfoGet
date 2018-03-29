import React, {Component} from 'react';
import { connect } from 'dva';

import { Modal } from 'antd-mobile';

import ItemContent from './../../components/moblie/ItemContent';

import ShopTrick from './../../assets/ShopTrick.png';
import thumbQRcode from './../../assets/thumbQRcode.png';
import config from './../../config';

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalQRcodeShow: false,
    };
  }

  // fix touch to scroll background page on iOS
  onWrapTouchStart = (e) => {
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  showQRcode() {
    if (this.props.AdminInfo.qrCode) {
      this.setState({isModalQRcodeShow: true});
    }
  }

  renderQRcode() {
    if (this.props.AdminInfo) {
      return (
        <div className="header-qrCode">

          <div className="qrCode-img" 
            onClick={this.showQRcode.bind(this)}
          >
            <img alt="thumbQRcode" src={thumbQRcode} />
          </div>

          <Modal
            visible={this.state.isModalQRcodeShow}
            transparent
            maskClosable={false}
            onClose={() => this.setState({isModalQRcodeShow: false})}
            title="扫描二维码联系我"
            footer={[{ text: '确定', onPress: () => this.setState({isModalQRcodeShow: false}) }]}
            wrapProps={{ onTouchStart: this.onWrapTouchStart }}
          >
            <div className="header-qrCode-modal">
              <img alt="qrCode" src={`${config.URLbase}${this.props.AdminInfo.qrCode}`} />
            </div>
          </Modal>

          <div className="qrCode-description">
            <div className="qrCode-name">
              行程负责人: {this.props.AdminInfo.name ? this.props.AdminInfo.name : '暂无'}
            </div>
            <div className="qrCode-webchat">
              微信号: {this.props.AdminInfo.webchat ? this.props.AdminInfo.webchat : '暂无'}
            </div>
          </div>
        </div>
      )
    }
  }

  renderNavigationheader() {
    return (
      <div className="Mobile-header">
        {this.renderQRcode.call(this)}
        <div className="header-background">
          <img alt="ShopTrick" src={ShopTrick} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="Mobile">
        {this.renderNavigationheader.call(this)}

        <div className="Mobile-main">
          <ItemContent 
            itemTitle="订单信息"
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  AdminInfo: state.load.AdminInfo,
})

export default connect(mapStateToProps)(Home);
