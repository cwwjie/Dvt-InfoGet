import React, {Component} from 'react';
import { Checkbox, Modal } from 'antd';

import navItem from './../../../assets/nav-item.png';
import navItemActive from './../../../assets/nav-item-active.png';
import navItemAccomplish from './../../../assets/nav-item-accomplish.png';

import Terms from './../../../components/Terms/index';

let navigationItemList = [
  {
    'isActive': true,
    'isAccomplish': true,
    'name': '订单信息'
  }, {
    'isActive': false,
    'isAccomplish': true, 
    'name': '额外赠送'
  }, {
    'isActive': false,
    'isAccomplish': false, 
    'name': '预订人信息'
  }, {
    'isActive': false,
    'isAccomplish': false, 
    'name': '航班信息'
  }, {
    'isActive': false,
    'isAccomplish': false, 
    'name': '入住信息'
  }, {
    'isActive': false,
    'isAccomplish': true, 
    'name': '特别说明'
  }
]

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'percentage': 10,
      'navigationList': navigationItemList,
      'isAgreeTerms': false,
      'isAllowSubmit': false,
      'isModalShow': false,
    }
  }

  renderList() {
    let renderItemImg = (item) => {
      if (item.isAccomplish) {

        return navItemAccomplish;
      } else {

        if (item.isActive) {

          return navItemActive;
        } else {

          return navItem;
        }
      }
    }

    return (
      <div className="navigation-list">
        {this.state.navigationList.map((val, key) => (
          <div key={key} className="navigation-item noselect">
            
            <div className="item-content">
              <img className="item-img" alt={val.name} src={renderItemImg(val)} />
              <span className={val.isActive ? 'active' : ''}>{val.name}</span>
            </div>
            {val.isActive ? <div className="item-active"></div> : null}
          </div>
        ))}
      </div>
    )
  }

  renderNavigationSubmit() {
    if (this.state.isAllowSubmit) {
      return <div className="navigation-submit submit-active noselect">提交信息</div>
    } else {
      return <div className="navigation-submit noselect">提交信息</div>
    }
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

        <div className="navigation-terms">
          <div className="terms-Agree noselect">
            <Checkbox
              checked={this.state.isAgreeTerms}
              onChange={(e) => this.setState({'isAgreeTerms': e.target.checked})}
            >我同意</Checkbox>
            <span
              className="terms-link"
              onClick={() => this.setState({'isModalShow': true})}
            >《潜游时光政策条款》</span>
          </div>

          {this.renderNavigationSubmit.call(this)}
          
        </div>

        <Modal
          title="潜游时光政策条款"
          visible={this.state.isModalShow}
          onOk={() => this.setState({'isAgreeTerms': true, 'isModalShow': false})}
          okText='我同意'
          onCancel={() => this.setState({'isAgreeTerms': false, 'isModalShow': false})}
          cancelText='不同意'
        >
          <Terms />
        </Modal>
      </div>
    )
  }
}

export default Navigation;
