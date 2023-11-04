"use client";

import React, { useState } from "react";
import "./projects.css";
import FrontendBox from "@/Component/ProjectBox/FrontendBox";
import BackendProjectBox from "@/Component/ProjectBox/BackendProjectBox";
import frameworkProjectData from "@/models/projectData/frontendProjectData";
import backendProjectData from "@/models/projectData/backendProjectData";
import liveAppData from "@/models/projectData/liveAppsData";
import LiveAppBox from "@/Component/ProjectBox/LiveAppBox";

const skillTypeTabs = ["FrontendProjects", "BackendProjects", "LiveApps"];

const FrontEndProjects = () => {
  return (
    <div className="px-4 pl-10 flex flex-wrap gap-10">
      {frameworkProjectData.map((skill) => (
        <FrontendBox {...skill} />
      ))}
    </div>
  );
};

const BackendProjects = () => {
  return (
    <div className="px-4 pl-10 flex flex-wrap gap-10">
      {backendProjectData.map((skill) => (
        <BackendProjectBox {...skill} />
      ))}
    </div>
  );
};
const LiveApps = () => {
  return (
    <div className="px-4 pl-10 flex flex-wrap gap-10">
      {liveAppData.map((skill) => (
        <LiveAppBox {...skill} />
      ))}
    </div>
  );
};

const skillData = {
  FrontendProjects: <FrontEndProjects />,
  BackendProjects: <BackendProjects />,
  LiveApps: <LiveApps />,
};

const projects = () => {
  const [skillType, setSkillType] = useState("FrontendProjects");
  return (
    <div className="p-4 py-0">
      <div className="flex w-[100%] justify-between p-4 py-10">
        {skillTypeTabs.map((skillType_) => (
          <button
            className={`px-10 py-2 text-white font-bold ${
              skillType === skillType_ &&
              `text-[#01eefe] border-b-4 border-[#01eefe]`
            }`}
            onClick={() => {
              setSkillType(skillType_);
              console.log(skillType_);
            }}
          >
            {skillType_}
          </button>
        ))}
      </div>
      {/* {
              ()=>{
                if(setSkillType == ){

                }
              }
            } */}
      {skillData[skillType]}
    </div>
  );
};

export default projects;
