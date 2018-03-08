import React, {Component} from 'react';
import { connect } from 'dva';

import order from './../../../assets/order.png';
import convertDate from './../../../utils/convertDate';

class OrderInfor extends Component {
  render() {
    const orderItem = this.props.gatherOrderItem;
    let cycleLength = Math.floor((orderItem.checkOut - orderItem.checkIn)/86400000);

    return (
      <div className="content-orderInfor">
        <div className="content-area-header">
          <img alt="orderInfor" src={order} />
          <span>订单信息</span>
        </div>
        
        <div className="orderInfor-content">
          <div className="row">
            <div className="col-6">
              <span>订单编号:</span> {orderItem.orderSn}
            </div>
            <div className="col-6">
              <span>订单状态:</span> {`已付金额${orderItem.payAmount}/未付金额${orderItem.notPayAmount}`}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <span>套餐名称:</span> {orderItem.orderName}
            </div>
            <div className="col-6">
              <span>周期长度:</span> {`${cycleLength + 1}天${cycleLength}晚`}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <span>入住日期:</span> {convertDate.timeStampToFormat(orderItem.checkIn)}
            </div>
            <div className="col-6">
              <span>退房日期:</span> {convertDate.timeStampToFormat(orderItem.checkOut)}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <span>房间总数:</span> {`${orderItem.roomNum}间`}
            </div>
            <div className="col-6">
              <span>出行人数:</span> {`${orderItem.peopleNum}人(成人${orderItem.adultNum}/儿童${orderItem.childNum})`}
            </div>
          </div>

        <div className="row">
          <div className="col-6">
            <span>房间总数:</span> {`${orderItem.roomNum}间`}
          </div>
          <div className="col-6">
            <span>出行人数:</span> {`${orderItem.peopleNum}人(成人${orderItem.adultNum}/儿童${orderItem.childNum})`}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <span>订单总额:</span> {`${orderItem.orderAmount} (计算方式${orderItem.calMethod})`}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <span>优惠金额:</span> {orderItem.discount}
          </div>
        </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  'gatherOrderItem': state.load.gatherOrderItem
});

export default connect(mapStateToProps)(OrderInfor);
