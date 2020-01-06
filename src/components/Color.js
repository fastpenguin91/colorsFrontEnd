import React, { Component } from "react";
import { BrowserRouter as Router, useRouteMatch } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Sidebar from "./Sidebar";
import Header from "./Header";
import LittleColors from "./LittleColors";
import "../styles/index.css";

function Color() {
  let match = useRouteMatch();

  const COLOR_QUERY = gql`
  query {
    color(id: "${match.params.id}"){
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

          return (
            <div class="sidebar_adjust">
              <div style={{ display: "inline-block" }}>
                <div class="individual_color" style={{background: data.color.color_code}}>
                  <p>{data.color.color_code}</p>
                </div>
              </div>
              <LittleColors />
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default Color;
