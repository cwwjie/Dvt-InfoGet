import React, {Component} from 'react';
import { connect } from 'dva';

import QRcode from './../../../assets/QRcode.jpg';
import config from './../../../config';

class Navigation extends Component {
  renderQRcode() {
    return this.props.AdminInfo.qrCode ? (
      <div className="wechat-QRcode">
        <img 
          className="QRcode-Thumb" 
          alt='QRcode-Thumb' 
          src={QRcode} 
        />

        <div className="QRcode">
          <img 
            className="QRcode-img" 
            alt='QRcode' 
            src={config.URLbase + this.props.AdminInfo.qrCode} 
          />
          <div>微信扫一扫联系客服</div>
        </div>

      </div>
    ) : <div />;
  }

  render() {
    const AdminInfo = this.props.AdminInfo;

    return AdminInfo ? (
      <div className="content-wechat" style={{'height': AdminInfo.qrCode ? '50px' : '20px'}}>

        <div className="wechat-description">
          { AdminInfo.name ? `行程负责人: ${AdminInfo.name}` : ''} {AdminInfo.webchat ? `微信号: ${AdminInfo.webchat}` : ''}
        </div>

        {this.renderQRcode.call(this)}
      </div>
    ) : <div />;
  }
}

const mapStateToProps = (state) => ({
  'AdminInfo': state.load.AdminInfo
});

export default connect(mapStateToProps)(Navigation);
