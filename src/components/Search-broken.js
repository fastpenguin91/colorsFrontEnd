import React, { Component, useState } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';

/*  const COLORS_SEARCH_QUERY = gql`
  query Colors_Search_Query($filter: String!) {
    colors(filter: $filter ) {
      color_code
      id
    }
  }
  `;*/

  const OLDQUERY = gql`
  query {
    colors {
      color_code
      id
    }
  }
  `;

function Search() {
  const [filter, setFilter] = useState("");
//  let weird = "f";
  const { loading, error, data } = useQuery(OLDQUERY);
  //const { loading, error, data, refetch } = useQuery(OLDQUERY, {
//    variables: { weird },
//  });

  console.log("data?");
  console.log(data.colors);


  return (
    <div>
      <label>
        Search: 
        <input type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        autoFocus />
        </label>
        <p>Filter is: {filter}</p>  
    </div>
  );
}

export default Search;
//export default withApollo(Search);
