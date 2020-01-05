import React from "react";
import Sidebar from "./Sidebar";
import { Query } from "react-apollo";
import gql from "graphql-tag";
//import { BrowserRouter as Link, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import Header from "./Header";

function ColorList() {
  let match = useRouteMatch();

  let skipNum = 12 * match.params.page;
  const COLORS_QUERY = gql`query {
    colors(
      first: 12
      skip: ${skipNum}
    ) { 
        id
        color_code
      }
  }`; //const COLORS_QUERY = gql`query { colors( first: 12 skip: ${skipNum}) { id color_code } }`;
  /*This works*/ const COUNT_COLORS_QUERY = gql`
    query {
      colors {
        id
        color_code
      }
    }
  `;
  return (
    <div>
      <Header />
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

          console.log("data.... in colorlist");
          console.log(data);

          return (
            <div>
              <Sidebar />
              <div
                style={{
                  marginLeft: "17%",
                  marginTop: "75px"
                }}
              >
                {colorsToRender.map(color => (
                  <Link to={"/color/" + color.id}>
                    <div style={{ display: "inline-block" }}>
                      <div
                        style={{
                          boxShadow: "2px 2px 2px 2px",
                          background: color.color_code,
                          display: "inline-block",
                          margin: "30px",
                          width: "300px",
                          height: "300px",
                          position: "relative",
                          borderRadius: "10px"
                        }}
                      >
                        <p
                          style={{
                            background: "white",
                            position: "absolute",
                            bottom: "0",
                            margin: "0",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            textAlign: "center",
                            width: "100%",
                            borderRadius: "0px 0px 10px 10px",
                            fontSize: "24px"
                          }}
                        >
                          {color.color_code}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        }}
      </Query>

      <Query query={COUNT_COLORS_QUERY}>
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
          const numOfPages = Math.ceil(data.colors.length / 12);
          let numOfPagesArr = [];
          for (let i = 0; i < numOfPages; i++) {
            numOfPagesArr.push(i);
          }

          return (
            <div>
              <div
                style={{
                  marginLeft: "17%",
                  textAlign: "center",
                  marginTop: "50px"
                }}
              >
                {numOfPagesArr.map(page => (
                  <Link to={"/colors/" + page}>
                    <span
                      style={{
                        margin: "30px",
                        fontSize: "32px",
                        paddingBottom: "100px",
                        textDecoration: "underline"
                      }}
                    >
                      {page}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default ColorList;
