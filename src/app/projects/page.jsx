"use client";

import React, { useState } from "react";
import "./projects.css";
import FrontendBox from "@/Component/ProjectBox/FrontendBox";
import BackendProjectBox from "@/Component/ProjectBox/BackendProjectBox";
import frameworkProjectData from "@/models/projectData/frontendProjectData";
import backendProjectData from "@/models/projectData/backendProjectData";


const skillTypeTabs = ["FrameworkProjects", "BackendProjects"];

const skillData = {
  FrameworkProjects:frameworkProjectData,
  BackendProjects: backendProjectData,
};

const projects = () => {
  const [skillType, setSkillType] = useState("FrameworkProjects");
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
              }}
            >
              {skillType_}
            </button>
          ))}
        </div>
  
        <div className="px-4 pl-10 flex flex-wrap gap-10">
          {skillData[skillType].map((skill) => (
            // <SkillsBox {...skill} />
               <FrontendBox {...skill}/>
          ))}
        </div>
      </div>
    
    
    // <div className="main-div">
         
    //      <BackendProjectBox/>
      
    //      {/* <FrontendBox/> */}
    //     {/* <FrontendBox/>
    //     <FrontendBox/>
    //     <FrontendBox/> */}
    // </div>





  );
};

export default projects;
