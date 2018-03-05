import React from 'react';

import logo from './../../../assets/logo.png';

function Copyright() {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-company">
          <div className="company-tiltle">
            <i><img alt="logo" src={logo}/></i>
            <h3>深圳潜游时光文化传媒有限公司</h3>
          </div>

          <div className="footer-company-infor">
            <div className="infor-row">
              <div><a href="./../other/help.html">公司信息</a></div>
              <div className="infor-row-right"><a href="mailto://chopin@divingtime.asia">电子邮箱: chopin@divingtime.asia</a></div>
            </div>
            <div className="infor-row">
              <div><a href="./../other/privacy.html">隐私声明</a></div>
              <div className="infor-row-right"><a>工作时间: 9:00 - 18:00</a></div>
            </div>
            <div className="infor-row">
              <div><a href="./../other/policy.html">政策条款</a></div>
              <div className="infor-row-right"><a href="tel://400-9688-768">服务咨询: 400-9688-768</a></div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          Copyright © 2016 DivingTime. All Rights Reserved. 潜游时光文化传媒有限公司 版权所有 <a href='http://www.miitbeian.gov.cn/'>粤ICP备18011854号-1</a>
        </div>
      </div>
    </footer>
  )
}

export default Copyright;
