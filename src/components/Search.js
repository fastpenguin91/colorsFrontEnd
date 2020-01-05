import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
//import "./App.css";

import { Query } from "react-apollo";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

function Search() {



  const GET_FILTERED_COLORS = gql`
  query Colors_Search_Query($filter: String!) {
    colors(filter: $filter) {
      id
      color_code 
    }
  }
`;


  const [filter, setFilter] = useState("");


  const { loading, error, data } = useQuery(GET_FILTERED_COLORS, {
    variables: { filter }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <label>
        Search:
        <input
          id="searchID"
          type="text"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          autoFocus
        />
      </label>
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
