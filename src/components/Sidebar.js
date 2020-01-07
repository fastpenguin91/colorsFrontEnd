import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import RandomButton from "./RandomButton";
import "../styles/index.css";

const COLORS_QUERY = gql`
  query {
    randomColor {
      id
      color_code
    }
  }
`;

function toggleDisplay() {
  console.log("clicked!");
  if (document.getElementById("mydropdown").style.display == "none") {
    document.getElementById("mydropdown").style.display = "block";
  } else {
    document.getElementById("mydropdown").style.display = "none";
  }
}

let randomElem;
function Sidebar() {
  let commonColorsObj = [
    {id: "ck4x91o61cwhd0993eqqawpyh", color: "Red"},
    {id: "ck4x95qtucxml0993wexyfxv1", color: "Orange"},
    {id: "ck4xsb6ha1dbt09225qwlqwmw", color: "Yellow"},
    {id: "ck49m8kdx9khr0964dtsodo8m", color: "Green" },
    {id: "ck4xsfxk61ehy0922vpjb0zc7", color: "Blue"},
    {id: "ck4xsjbpai3tv0993nhk42s6c", color: "Purple"},
    {id: "ck4xsks6b1gbl0922t8znwzr4", color: "Brown"},
    {id: "ck4xslt5v1gk70922737ixrma", color: "Gray"}]
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
            <div>
              <div class="theSidebar">
                <RandomButton />
                <div>
                  {commonColorsObj.map(obj => (
                    <Link to={"/color/" + obj.id}>
                      <p class="sidebar_link">{obj.color}</p>
                    </Link> 
                  ))}

                </div>
              </div>
              <div class="sidebar_mobile">
                <RandomButton />
                <button onClick={() => toggleDisplay() } class="dropbtn">
                  Common Colors
                </button>
                <div id="mydropdown" class="dropdown_content">

                  {commonColorsObj.map(obj => (
                    <Link to={"/color/" + obj.id}>
                      <p class="sidebar_link">{obj.color}</p>
                    </Link> 
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default Sidebar;
