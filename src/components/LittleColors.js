import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../styles/index.css";


function LittleColors() {
  let randomNum = Math.floor(Math.random() * 90);

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

        return (
          <div>
            <div>
              {colorsToRender.map(color => (
                <Link to={"/color/" + color.id}>
                  <div style={{ display: "inline-block" }}>
                    <div class="little_colors" style={{ background: color.color_code }}>
                      <p>{color.color_code}</p>
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
