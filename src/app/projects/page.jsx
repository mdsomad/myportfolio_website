"use client";

import React from "react";
import "./projects.css";
import FrontendBox from "@/Component/ProjectBox/FrontendBox";

const projects = () => {
  return (
    <div className="main-div">
        <FrontendBox/>
        <FrontendBox/>
        <FrontendBox/>
    </div>
  );
};

export default projects;
