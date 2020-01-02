import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

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
          console.log("new data with random color")
          console.log(data.randomColor.color_code)
          const colorsToRender = data.colors;
          let numOfPagesArr = [];
          console.log("random element:");
//          randomElem =
//            data.colors[Math.floor(Math.random() * data.colors.length)];

          return (
            <div
              style={{
                height: "100%",
                background: "#d3d3d3",
                width: "15%",
                position: "fixed",
                textAlign: "center"
              }}
            ><Link to={"/color/" + data.randomColor.id}>
              <button
                style={{
                  marginTop: "150px",
                  background: "white",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "18px",
                  borderWidth: "2px 2px 2px 2px",
                  borderColor: "black",
                  padding: "15px 25px 15px 25px",
                  fontWeight: "bold"
                }}
              >
                Random Color
              </button></Link>
              <Link to={"/color/ck4x91o61cwhd0993eqqawpyh"}>
                <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Red
              </p>
              </Link>
              <Link to={"/color/ck4x95qtucxml0993wexyfxv1"}><p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Orange
              </p></Link>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Yellow
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Green
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Blue
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Purple
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Brown
              </p>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "24px",
                  paddingLeft: "50px"
                }}
              >
                Gray
              </p>
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default Sidebar;
