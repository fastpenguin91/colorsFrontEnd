import React, { useState } from "react";
import "../styles/index.css";
import logo from "../logo.svg";

import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

function Search() {
  let match = useRouteMatch();
  let skipNum = 12 * (match.params.page - 1);

  const GET_FEED_COLORS = gql`
    query Feed_Query($filter: String!) {
      feed(filter: $filter, first: 12, skip: ${skipNum}) {
        count
        colors {
          color_code
          id
        }
      }
    }
  `;

  const [filter, setFilter] = useState("");

  const { loading, error, data } = useQuery(GET_FEED_COLORS, {
    variables: { filter }
  });

  if (loading) return "Loading...";
  if (error) return <Redirect to="/" />;

  const numOfPages = Math.ceil(data.feed.count / 12);
  let numOfPagesArr = [];
  for (let i = 1; i <= numOfPages; i++) {
    numOfPagesArr.push(i);
  }

  return (
    <div>
      <div class="header">
        <img src={logo} />
        <label class="header_label">
          <input
            id="searchID"
            type="text"
            placeholder="Search"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            autoFocus
          />
        </label>
      </div>
      <Sidebar />
      <div class="sidebar_adjust">
        <h1 class="sidebar_adjust">Count: {data.feed.count}</h1>
        <div class="color_container" style={{ display: "inline-block" }}>
          {data.feed.colors.map(color => (
            <Link to={"/color/" + color.id}>
              <div class="color_obj" style={{ background: color.color_code }}>
                <p> {color.color_code} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div class="sidebar_adjust page_numbers">
        {numOfPagesArr.map(page => (
          <Link to={"/page/" + page}>
            <span class={"page_number " + (page == match.params.page ? "current_page" : "" )}>{page}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Search;
