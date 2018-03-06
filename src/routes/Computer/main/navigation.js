import React, {Component} from 'react';

import navItem from './../../../assets/nav-item.png';
import navItemActive from './../../../assets/nav-item-active.png';
import navItemAccomplish from './../../../assets/nav-item-accomplish.png';


class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'percentage': 10,
      'navigationList': [
        {
          'status': 'normal', // normal active accomplish
          'name': '订单信息'
        },
        {
          'status': 'active', 
          'name': '额外赠送'
        },
        {
          'status': 'accomplish', 
          'name': '预订人信息'
        },
      ]
    }
  }

  renderList() {
    return (
      <div className="navigation-list">
        <div className="navigation-item">
          <img alt="navItem" src={navItem} />
          <div className="item-name">订单信息</div>
          <div className="item-active"></div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content-navigation">

        <div className="navigation-percentage">
          <div className="percentage-description">
            <div className="percentage-description-left">
              信息完成度: <span>{this.state.percentage}%</span>
            </div>
            <div className="percentage-description-right">浏览信息</div>
          </div>
          <div className="percentage-icon">
            <div style={{'width': `${this.state.percentage}%`}}></div>
          </div>
        </div>

        {this.renderList.call(this)}
      </div>
    )
  }
}

export default Navigation;
