"use client";
import MobileBackendProjectBox from "@/Component/ProjectBox/MobileBackendProjectBox";
import "./backendprojects.css";
import BackendProjectBox from "@/Component/ProjectBox/BackendProjectBox";
import ProjectsnavigationBar from "@/Component/ProjectsNavigationBar/ProjectsnavigationBar";
import backendProjectData from "@/models/projectData/backendProjectData";
import React from "react";

const backendprojects = () => {
  return (
    <div>
      <ProjectsnavigationBar />
      <div className="mobileView">
      {backendProjectData.map((data,index) => {
          return (
            <MobileBackendProjectBox key={index} backendProjectData={data} />
          );
        })}
        
      </div>

      <div className="Container">
        {backendProjectData.map((data,index) => {
          return (
            //   <h1>{data.appName}</h1>
            //   <BackendProjectBox/>
            <BackendProjectBox key={index} backendProjectData={data} />
          );
        })}
      </div>
    </div>
  );
};

export default backendprojects;
