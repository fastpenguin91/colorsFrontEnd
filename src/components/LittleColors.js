import React from "react";
import Sidebar from "./Sidebar";
import { Query } from "react-apollo";
import gql from "graphql-tag";
//import { BrowserRouter as Link, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import Header from "./Header";


function LittleColors() {
  let match = useRouteMatch();
  let randomNum = Math.floor(Math.random() * 90);

  //let skipNum = 12 * match.params.page;
  const COLORS_QUERY = gql`query { colors( first: 3 skip: ${randomNum}) { id color_code } }`;
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
        console.log("in little colors... data.colors")
        console.log(colorsToRender);

        return (
          <div>
            <div>
              {colorsToRender.map(color => (
                <Link to={"/color/" + color.id}>
                  <div style={{ display: "inline-block" }}>
                    <div
                      style={{
                        boxShadow: "2px 2px 2px 2px",
                        background: color.color_code,
                        display: "inline-block",
                        margin: "30px",
                        width: "150px",
                        height: "150px",
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
                          paddingBottom: "5px",
                          paddingTop: "5px",
                          textAlign: "center",
                          width: "100%",
                          borderRadius: "0px 0px 10px 10px",
                          fontSize: "20px"
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



    </div>
  );
}

export default LittleColors;
