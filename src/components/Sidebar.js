import React, { Component } from "react";

function Sidebar() {
  return (
    <div style={{
        height: "100%", 
        background: "#d3d3d3",
        width: "15%",
        position: "fixed",
        textAlign: "center", }}>
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
      }}>Random Color</button>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Red</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Orange</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Yellow</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Green</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Blue</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Purple</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Brown</p>
      <p style={{textAlign: "left", fontSize: "24px", paddingLeft: "50px"}}>Gray</p>
    </div>
  );
}

export default Sidebar;
