"use client";
import React, { useState } from "react";
import "./crew.css";
import crewData from "@/models/crewData/crewData";
const crew = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="mainContainer">
      {crewData.map((data) => {
        return (
          <div className="childContainer">
            <div className="crewTextBox">
              <h1 className="nameTag">Name : {data.name}</h1>
              <h1 className="roleTag">Role : {data.role}</h1>
              <div style={{ display: "flex" }}>
                <h1 className="websiteLinkTextTag">Website Link : <span style={{color:"cornflowerblue"}}>{data.websiteLink}</span></h1>
              </div>
            </div>
            <div style={{ display: "flex", flexGrow: "1" }}></div>
            <a target="_blank" href={data.websiteLink}>
              <button className="visitButton">Visit Website</button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default crew;
