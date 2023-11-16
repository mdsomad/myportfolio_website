"use client";
import "./projects.css";
import React, { useState } from "react";
import FrontendBox from "@/Component/ProjectBox/FrontendBox";
import BackendProjectBox from "@/Component/ProjectBox/BackendProjectBox";
import frameworkProjectData from "@/models/projectData/frontendProjectData";
import backendProjectData from "@/models/projectData/backendProjectData";
import liveAppData from "@/models/projectData/liveAppsData";
import LiveAppBox from "@/Component/ProjectBox/LiveAppBox";
import FrontendProjectMobileView from "@/Component/ProjectBox/FrontendProjectMobileView";
import ProjectsnavigationBar from "@/Component/ProjectsNavigationBar/ProjectsnavigationBar";
import frontendProjectData from "@/models/projectData/frontendProjectData";

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






  const proojectTypeTabsData = [
    "Frontend Projects",
    "Backend projects"
  ];
  
  
  
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (



    <>
    <ProjectsnavigationBar />
    <div className="desktopViewContainer">
      {frameworkProjectData.map((data) => (
        <FrontendBox frontendProjectData={data} />
      ))}
    </div>

    <div className="mobileAndTabletVewContainer">
      {frontendProjectData.map((data) => (
        <FrontendProjectMobileView frontendProjectData={data} />
      ))}
    </div>
  </>
    
    
    
    
    
    
    // <>
    
    //   <div className="desktopView">
    //     <div className="p-4 py-0">
    //       <div className="flex w-[100%] justify-between p-4 py-10">
    //         {skillTypeTabs.map((skillType_) => (
    //           <button
    //             className={`px-10 py-2 text-white font-bold ${
    //               skillType === skillType_ &&
    //               `text-[#01eefe] border-b-4 border-[#01eefe]`
    //             }`}
    //             onClick={() => {
    //               setSkillType(skillType_);
    //             }}
    //           >
    //             {skillType_}
    //           </button>
    //         ))}
    //       </div>
    //       {/* {
    //           ()=>{
    //             if(setSkillType == ){

    //             }
    //           }
    //         } */}
    //       {skillData[skillType]}
    //     </div>
    //   </div>

    
    //  {/* Tablete Code */}
    //  <div className="tabletView">

    //     <div className="tabContainer">


    //     {proojectTypeTabsData.map((tabViewType, index) => (
    //         <div className="tab" onClick={() => toggleTab(index)}>
    //           <h6
    //             className={
    //               toggleState == index ? "activeTabText" : "notActiveTabText"
    //             }
    //           >
    //             {tabViewType}
    //           </h6>
    //           <div
    //             className={
    //               toggleState === index ? "activeTabs" : "activeNotTabs"
    //             }
    //           ></div>
    //         </div>
    //       ))}

    //     </div>

    //     <div
    //       className={
    //         toggleState == 0
    //           ? "frontendProjectActiveTab"
    //           : "frontendProjectNotActiveTab"
    //       }
    //     >
    //       {frameworkProjectData.map((skill) => (
    //         <FrontendProjectMobileView {...skill} />
    //       ))}
    //     </div>

    //     <div
    //       className={
    //         toggleState == 1
    //           ? "frontendProjectActiveTab"
    //           : "frontendProjectNotActiveTab"
    //       }
    //     >
    //       {backendProjectData.map((skill) => (
    //         <BackendProjectBox {...skill} />
    //       ))}
    //     </div>
    //   </div>



    //   {/* MobileView Code */}
    //   <div className="mobileView">
    //     <div className="tabContainer">

        
    //     {proojectTypeTabsData.map((tabViewType, index) => (
    //         <div className="tab" onClick={() => toggleTab(index)}>
    //           <h6
    //             className={
    //               toggleState == index ? "activeTabText" : "notActiveTabText"
    //             }
    //           >
    //             {tabViewType}
    //           </h6>
    //           <div
    //             className={
    //               toggleState === index ? "activeTabs" : "activeNotTabs"
    //             }
    //           ></div>
    //         </div>
    //       ))}

    //     </div>

    //     <div
    //       className={
    //         toggleState == 0
    //           ? "frontendProjectActiveTab"
    //           : "frontendProjectNotActiveTab"
    //       }
    //     >

          
    //       {frameworkProjectData.map((skill) => (
    //         <FrontendProjectMobileView {...skill} />
    //       ))}
    //     </div>

    //     <div
    //       className={
    //         toggleState == 1
    //           ? "frontendProjectActiveTab"
    //           : "frontendProjectNotActiveTab"
    //       }
    //     >
    //       {backendProjectData.map((skill) => (
    //         <BackendProjectBox {...skill} />
    //       ))}
    //     </div>
    //   </div>
    // </>
  );
};

export default projects;
