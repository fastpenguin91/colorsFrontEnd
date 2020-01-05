import React, { Component } from "react";
import logo from '../logo.svg';
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

function Header() {
  return (
    <div style={{
      width: "100%",
      height: "75px",
      background: "#3e5780",
      position: "fixed",
      top: "0",
      zIndex: "9"}}>
        <img src={logo} style={{height: "50px", width: "50px", marginLeft: "20px", marginTop: "10px"}} />
        <Link to={"/search"}><button style={{float: "right", margin: "20px", fontSize: "24px"}}>Search</button></Link>
    </div>
  );
}

export default Header;
