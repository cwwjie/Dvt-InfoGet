import React, {Component} from 'react';
import { connect } from 'dva';

import order from './../../../assets/order.png';

class OrderInfor extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = (state) => ({
  'gatherOrderItem': state.load.gatherOrderItem
});

export default connect(mapStateToProps)(OrderInfor);
