"use client";
import React from "react";
import "./frontendProjects.css";
import FrontendBox from "@/Component/ProjectBox/FrontendBox";
import ProjectsnavigationBar from "@/Component/ProjectsNavigationBar/ProjectsnavigationBar";
import frontendProjectData from "@/models/projectData/frontendProjectData";
import FrontendProjectMobileView from "@/Component/ProjectBox/FrontendProjectMobileView";

const frontendprojects = () => {
  return (
    <div>
      <ProjectsnavigationBar />
      <div className="desktopViewContainer">
        {frontendProjectData.map((data,index) => (
          <FrontendBox key={index} frontendProjectData={data} />
        ))}
      </div>

      <div className="mobileAndTabletVewContainer">
        {frontendProjectData.map((data,index) => (
          <FrontendProjectMobileView key={index} frontendProjectData={data} />
        ))}
      </div>
    </div>
  );
};

export default frontendprojects;
