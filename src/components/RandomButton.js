import React, { Component, useState } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { withApollo } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";

const GET_RANDOM_COLOR = gql`
  query {
    randomColor {
      id
      color_code
    }
  }
`;

function RandomButton({ onColorSelected }) {
  const { loading, error, data, refetch } = useQuery(GET_RANDOM_COLOR);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Link to={"/color/" + data.randomColor.id}>
        <button style={{
            marginTop: "150px",
            background: "white",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "18px",
            borderWidth: "2px 2px 2px 2px",
            borderColor: "black",
            padding: "15px 25px 15px 25px",
            fontWeight: "bold",
        }} 
            onClick={() => refetch()}>Random Color</button>
      </Link>
    </div>
  );
}

export default RandomButton;