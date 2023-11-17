"use client";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";
import React, { useState } from "react";

import "../skills/skills.css";

import languagesData from "@/models/languagesData";
import frameworksData from "@/models/frameworksData";
import backendData from "@/models/backendData";
import designData from "@/models/designData";
import extraData from "@/models/extraData";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";

const skillTypeTabs = ["Language", "Framework", "Backend", "Design", "Extra"];

const skillData = {
  Language: languagesData,
  Framework: frameworksData,
  Backend: backendData,
  Design: designData,
  Extra: extraData,
};

// import ProgressBar from "./ProgressBarLabels.module.css"

const skillTypeTabsData = [
  "Languages",
  "Frameworks",
  "Backend",
  "Design",
  "Extra",
];

const skills = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="desktopViewContainer">
        {languagesData.map((skill,index) => (
          <SkillsBox key={index} languagesData={skill} />
        ))}
      </div>
      <div className="mobileAndTabletVewContainer">
        <SkillsMobileView languagesData={languagesData} />
      </div>
    </>
  );

  // return (
  //   <>
  //     {/* DesktopView size  */}
  //     <div className="desktopView">
  //       <div className="p-4 py-0">
  //         <div className="flex w-[100%] justify-between p-4 py-10">
  //           {skillTypeTabs.map((skillType_) => (
  //             <button
  //               className={`px-10 py-2 text-white font-bold ${
  //                 skillType === skillType_ &&
  //                 `text-[#01eefe] border-b-4 border-[#01eefe]`
  //               }`}
  //               onClick={() => {
  //                 setSkillType(skillType_);
  //               }}
  //             >
  //               {skillType_}
  //             </button>
  //           ))}
  //         </div>

  //         <div className="px-4 pl-10 flex flex-wrap gap-10">
  //           {skillData[skillType].map((skill) => (
  //             <SkillsBox {...skill} />
  //           ))}
  //         </div>
  //       </div>
  //     </div>

  //     <div className="tableteView">
  //       <div className="tabContainer">
  //         {skillTypeTabsData.map((tabViewType, index) => (
  //           <div className="tab" onClick={() => toggleTab(index)}>
  //             <h6
  //               className={
  //                 toggleState == index ? "activeTabText" : "notActiveTabText"
  //               }
  //             >
  //               {tabViewType}
  //             </h6>
  //             <div
  //               className={
  //                 toggleState === index ? "activeTabs" : "activeNotTabs"
  //               }
  //             ></div>
  //           </div>
  //         ))}
  //       </div>
  //       {/* body */}
  //       <div
  //         className={
  //           toggleState == 0
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={languagesData} />
  //       </div>

  //       <div
  //         className={
  //           toggleState == 1
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={frameworksData} />
  //       </div>
  //       <div
  //         className={
  //           toggleState == 2
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={backendData} />
  //       </div>
  //       <div
  //         className={
  //           toggleState == 3
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={designData} />
  //       </div>
  //       <div
  //         className={
  //           toggleState == 4
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={extraData} />
  //       </div>
  //     </div>

  //     {/* Mobile size View */}
  //     <div className="mobileView">
  //       <div className="tabContainer">
  //         {skillTypeTabsData.map((tabViewType, index) => (
  //           <div className="tab" onClick={() => toggleTab(index)}>
  //             <h6
  //               className={
  //                 toggleState == index ? "activeTabText" : "notActiveTabText"
  //               }
  //             >
  //               {tabViewType}
  //             </h6>
  //             <div
  //               className={
  //                 toggleState === index ? "activeTabs" : "activeNotTabs"
  //               }
  //             ></div>
  //           </div>
  //         ))}
  //       </div>
  //       {/* body */}
  //       <div
  //         className={
  //           toggleState == 0
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >

  //       </div>

  //       <div
  //         className={
  //           toggleState == 1
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={frameworksData} />
  //       </div>
  //       <div
  //         className={
  //           toggleState == 2
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={backendData} />
  //       </div>
  //       <div
  //         className={
  //           toggleState == 3
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={designData} />
  //       </div>
  //       <div
  //         className={
  //           toggleState == 4
  //             ? "frontendProjectActiveTab"
  //             : "frontendProjectNotActiveTab"
  //         }
  //       >
  //         <SkillsMobileView skillsData={extraData} />
  //       </div>
  //     </div>
  //   </>
  // );
};

export default skills;
