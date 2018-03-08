import React, {Component} from 'react';
import { connect } from 'dva';

import order from './../../../assets/order.png';
import convertDate from './../../../utils/convertDate';
import WavyLines from './wavyLines';

class GiftInfor extends Component {
  renderInsurance() {
    const orderItem = this.props.gatherOrderItem;

    if (orderItem.present === '1' ||  orderItem.present === '1,2') {
      return (
        <div>
          <div className="row"><span>赠送保险:</span> “保游全球”畅游海外旅行保障A计划</div>
          <div className="row"><span>保险期间:</span> `${convertDate.timeStampToFormat(orderItem.insuranceBegin)}至${convertDate.timeStampToFormat(orderItem.insuranceEnd)}`</div>
        </div>
      );
    }
    return <div/>;
  }

  renderTransfers() {
    const orderItem = this.props.gatherOrderItem;

    if (orderItem.present === '2' ||  orderItem.present === '1,2') {
      return (
        <div>
          <div className="row"><span>机场接送:</span> (1次往返亚庇机场--市区酒店的接送,免费接机时间段为6:05-21:55，超出时间需另付35元)</div>
          <div className="row"><span></span> {orderItem.transfersInfo}</div>
        </div>
      );
    }
    return <div/>;
  }

  render() {
    const orderItem = this.props.gatherOrderItem;

    return orderItem.present ? (
      <div className="content-giftInfor">
        <div className="giftInfor">
          <div className="content-area-header">
            <img alt="orderInfor" src={order} />
            <span>保险信息</span>
          </div>

          <div className="giftInfor-description">
            {this.renderInsurance.call(this)}
            {this.renderTransfers.call(this)}
          </div>
        </div>

        <WavyLines />
      </div>
    ) : <div/>;
  }
}

const mapStateToProps = (state) => ({
  'gatherOrderItem': state.load.gatherOrderItem
});

export default connect(mapStateToProps)(GiftInfor);
