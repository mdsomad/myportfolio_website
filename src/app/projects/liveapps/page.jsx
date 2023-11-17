"use client";
import "./liveApps.css";
import LiveAppBox from "@/Component/ProjectBox/LiveAppBox";
import ProjectsnavigationBar from "@/Component/ProjectsNavigationBar/ProjectsnavigationBar";
import React from "react";
import liveAppData from "@/models/projectData/liveAppsData";

const liveApps = () => {
  return (
    <>
      <ProjectsnavigationBar />
      <div className="VewContainer">
        {liveAppData.map((data,index) => (
          <LiveAppBox key={index} liveAppData={data} />
        ))}
      </div>
    </>
  );
};

export default liveApps;
