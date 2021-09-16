import React from "react";
import Image from "./StudioLogosGrid.svg";
import { shortNames } from "./shortNames";
import "./Logos.css";

const Background = ({}) => {
  console.log(shortNames);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div className="first" style={{ width: "100px", height: "100px" }} />
      <div className="second" style={{ width: "100px", height: "100px" }} />
    </div>
  );
};

export default Background;
