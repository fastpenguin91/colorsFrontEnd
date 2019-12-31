import React from "react";
import Sidebar from "./Sidebar";
import { Query } from "react-apollo";
import gql from "graphql-tag";
//import { BrowserRouter as Link, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

function GetPreviousPage(currentPage) {
  if (currentPage != 0) {
    console.log("current page");
    console.log(currentPage);
    return (
      <Link to={"/colors/" + (parseInt(currentPage) - 1)}>
        <span style={{ margin: "10px" }}>previous</span>
      </Link>
    );
  }
}

function GetNextPage(currentPage, listLength) {
  if (listLength >= 5) {
    return (
      <Link to={"/colors/" + (parseInt(currentPage) + 1)}>
        <span style={{ margin: "10px" }}>next</span>
      </Link>
    );
  }
}

function ColorList() {
  let match = useRouteMatch();

  GetPreviousPage(match);

  let skipNum = 12 * match.params.page;
  const COLORS_QUERY = gql`query { colors( first: 12 skip: ${skipNum}) { id color_code } }`;
  return (
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
        console.log("data");
        console.log(data);
        const colorsToRender = data.colors;
        console.log("arrays...");
        console.log(data.colors.slice(0, 3));
        console.log(data.colors.slice(0, 3));

        return (
          <div>
            <Sidebar />
            <div style={{
              marginLeft: "17%"
            }}>
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
                          textAlign: "center",
                          width: "100%",
                          borderRadius: "0px 0px 10px 10px"
                        }}
                      >
                        {color.color_code}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}

              {GetPreviousPage(match.params.page)}
              {GetNextPage(match.params.page, colorsToRender.length)}
            </div>
          </div>
        );
      }}
    </Query>
  );
}

export default ColorList;
