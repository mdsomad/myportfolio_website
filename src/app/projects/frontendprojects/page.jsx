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
        {frontendProjectData.map((data, index) => (
          <FrontendBox key={index} frontendProjectData={data} />
        ))}
      </div>

      <div className="mobileAndTabletVewContainer">
        {frontendProjectData.map((data, index) => (
          <>
            <FrontendProjectMobileView key={index} frontendProjectData={data} />
            {
                  index == 7 ? null : <div
                  style={{
                    backgroundColor: "#01d7e6",
                    width: "100%",
                    height: "1vw",
                    marginBottom: "4vw",
                  }}
                ></div>
            }
         
          </>
        ))}
      </div>
    </div>
  );
};

export default frontendprojects;
