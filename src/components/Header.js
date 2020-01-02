import React, { Component } from "react";
import logo from '../logo.svg';

function Header() {
  return (
    <div style={{
      width: "100%",
      height: "75px",
      background: "#3e5780",
      position: "fixed",
      top: "0",
      zIndex: "9"}}>
        <img src={logo} style={{height: "75px", width: "75px"}} />
    </div>
  );
}

export default Header;
