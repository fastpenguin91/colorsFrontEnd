import React, { useState } from "react";
//import logo from "./logo.svg";
//import "./App.css";

import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_COLORS = gql`
  query Colors_Search_Query($filter: String!) {
    colors(filter: $filter) {
      id
      color_code 
    }
  }
`;

function Search() {
  const [filter, setFilter] = useState("");
  const { loading, error, data } = useQuery(GET_COLORS, {
    variables: { filter }
  });

  if (loading) return "Loading...";
  if (error) return `Error! nyyaaahh ${error.message}`;

  return (
    <div>
        <label>
          Search:
          <input
            type="text"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            autoFocus
          />
        </label>
         -------- Name state is: {filter}

      {data.colors.map(color => (
        <div>This is unreal {color.color_code}</div>
      ))}
              <div
                style={{
                  marginLeft: "17%",
                  marginTop: "75px"
                }}
              >
                {data.colors.map(color => (
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
}

export default Search;
