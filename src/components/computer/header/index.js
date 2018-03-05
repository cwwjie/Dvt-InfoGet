import React from 'react';

import logo from './../../../assets/logo.png';

function Header() {
  return (
    <header>
      <a href="./../index.html"><img alt="logo" src={logo}/></a>
      <div className="tell-header">服务咨询 :<a href="tel://4006709078"> 400-9688-768</a></div>
    </header>
  )
}

export default Header;
