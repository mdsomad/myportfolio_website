"use client";

import React from "react";
import "./projects.css";

const projects = () => {
  return (
    <div className="main-div">
      <div className="container-div">
        <div className="container-screenshots">
          <div className="screenshots-box">
            <img src="./screenshots/Screenshot_1690008176.png" />
          </div>
          <div className="screenshots-box">
            <img src="./screenshots/Screenshot_1690008176.png" />
          </div>
          <div className="screenshots-box">
            <img src="./screenshots/Screenshot_1690008176.png" />
          </div>
          <div className="screenshots-box">
            <img src="./screenshots/Screenshot_1690008176.png" />
          </div>
          
        </div>

        <div className="container-child"></div>
      </div>
      {/* <div className='container-div'></div>
        <div className='container-div'></div>
       */}
    </div>
  );
};

export default projects;
