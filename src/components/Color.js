import React, { Component } from "react";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Sidebar from './Sidebar';
import Header from './Header';
/*const COLOR_QUERY = gql`
  query {
    colors {
      color_code
      id
    }
  }
`;*/

let correctColor;

function Color() {
  let match = useRouteMatch();

const COLOR_QUERY = gql`
  query {
    color(where: {
      id: "${match.params.id}"
    }) {
      color_code
      id
    }
  }
`;


  return (
    <div>
      <Header />
      <Sidebar />
    <Query query={COLOR_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return <div>Fetching</div>;
        }
        if (error) return <div>Error</div>;

//        const colorsToRender = data.colors;

//        correctColor = colorsToRender.find(function(elem, index, arr) {
//          return elem.id == match.params.id;
//        });

        return (
          <div style={{marginLeft: "17%", marginTop: "75px"}}>
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  border: "1px solid black",
                  background: data.color.color_code,
                  display: "inline-block",
                  margin: "10px",
                  width: "650px",
                  height: "650px",
                  position: "relative"
                }}
              >
                <p
                  style={{
                    background: "white",
                    position: "absolute",
                    bottom: "0",
                    margin: "0",
                    paddingBottom: "10px",
                    textAlign: "center",
                    width: "100%",
                    fontSize: "48px",
                  }}
                >
                  {data.color.color_code}
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
    </div>
  );
}

export default Color;
