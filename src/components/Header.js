import React, { Component } from "react";
import logo from '../logo.svg';
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import "../styles/index.css";


function Header() {
  return (
    <div class="header">
        <img src={logo} />
        <Link to={"/"}><button class="home_btn">home</button></Link>
    </div>
  );
}

export default Header;
