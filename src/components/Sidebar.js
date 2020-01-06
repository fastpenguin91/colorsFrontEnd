import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import RandomButton from './RandomButton';
import "../styles/index.css";

const COLORS_QUERY = gql`
  query {
    randomColor {
      id
      color_code
    }
  }
`;

let randomElem;
function Sidebar() {

  return (
    <div>
      <Query query={COLORS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Fetching</div>;
          }
          if (error) {
            console.log("error");
            console.log(error);
            return <div>Error: </div>;
          }
          const colorsToRender = data.colors;
          let numOfPagesArr = [];

          return (
            <div
              style={{
                height: "100%",
                background: "#d3d3d3",
                width: "15%",
                position: "fixed",
                textAlign: "center"
              }}
            >
              <RandomButton />
              <Link to={"/color/ck4x91o61cwhd0993eqqawpyh"}>
                <p class="sidebar_link">Red</p>
              </Link>
              <Link to={"/color/ck4x95qtucxml0993wexyfxv1"}>
                <p class="sidebar_link">Orange</p>
              </Link>
              <Link to={"/color/ck4xsb6ha1dbt09225qwlqwmw"}>
                <p class="sidebar_link">Yellow</p>
              </Link>
              <Link to={"/color/ck49m8kdx9khr0964dtsodo8m"}>
                <p class="sidebar_link">Green</p>
              </Link>
              <Link to={"/color/ck4xsfxk61ehy0922vpjb0zc7"}>
                <p class="sidebar_link">Blue</p>
              </Link>
              <Link to={"/color/ck4xsjbpai3tv0993nhk42s6c"}>
                <p class="sidebar_link">Purple</p>
              </Link>
              <Link to={"/color/ck4xsks6b1gbl0922t8znwzr4"}>
                <p class="sidebar_link">Brown</p>
              </Link>
              <Link to={"/color/ck4xslt5v1gk70922737ixrma"}>
                <p class="sidebar_link">Gray</p>
              </Link>
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default Sidebar;
