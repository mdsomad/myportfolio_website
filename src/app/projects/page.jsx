"use client";

import React from "react";
import "./projects.css";
import FrontendBox from "@/Component/ProjectBox/FrontendBox";
import BackendProjectBox from "@/Component/ProjectBox/BackendProjectBox";


const projects = () => {
  return (
    <div className="main-div">
         
         <BackendProjectBox/>
      
      
        {/* <FrontendBox/>
        <FrontendBox/>
        <FrontendBox/> */}
    </div>
  );
};

export default projects;
