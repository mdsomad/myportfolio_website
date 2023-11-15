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
        {liveAppData.map((data) => (
          <LiveAppBox liveAppData={data} />
        ))}
      </div>
    </>
  );
};

export default liveApps;
