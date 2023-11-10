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

const skillTypeTabs = ["Language", "Framework", "Backend", "Design", "Extra"];

const skillData = {
  Language: languagesData,
  Framework: frameworksData,
  Backend: backendData,
  Design: designData,
  Extra: extraData,
};

// import ProgressBar from "./ProgressBarLabels.module.css"

const skills = () => {
  const [skillType, setSkillType] = useState("Language");

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      {/* DesktopView size  */}
      <div className="desktopView">
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
              <SkillsBox {...skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile size  */}
      <div className="mobileView">
        <div className="tabContainer">
          <div className="tab" onClick={() => toggleTab(1)}>
            <h6
              className={
                toggleState == 1 ? "activeTabText" : "notActiveTabText"
              }
            >
              Languages
            </h6>
            <div
              className={toggleState === 1 ? "activeTabs" : "activeNotTabs"}
            ></div>
          </div>
          <div className="tab" onClick={() => toggleTab(2)}>
            <h6
              className={
                toggleState == 2 ? "activeTabText" : "notActiveTabText"
              }
            >
              Frameworks
            </h6>
            <div
              className={toggleState === 2 ? "activeTabs" : "activeNotTabs"}
            ></div>
          </div>
          <div className="tab" onClick={() => toggleTab(3)}>
            <h6
              className={
                toggleState == 3 ? "activeTabText" : "notActiveTabText"
              }
            >
              Backend
            </h6>
            <div
              className={toggleState === 3 ? "activeTabs" : "activeNotTabs"}
            ></div>
          </div>
          <div className="tab" onClick={() => toggleTab(4)}>
            <h6
              className={
                toggleState == 4 ? "activeTabText" : "notActiveTabText"
              }
            >
              Design
            </h6>
            <div
              className={toggleState === 4 ? "activeTabs" : "activeNotTabs"}
            ></div>
          </div>
          <div className="tab" onClick={() => toggleTab(5)}>
            <h6
              className={
                toggleState == 5 ? "activeTabText" : "notActiveTabText"
              }
            >
              Extra
            </h6>
            <div
              className={toggleState === 5 ? "activeTabs" : "activeNotTabs"}
            ></div>
          </div>
        </div>

        <div
          className={
            toggleState == 1
              ? "frontendProjectActiveTab"
              : "frontendProjectNotActiveTab"
          }
        >
          <SkillsMobileView />
          {/* {frameworkProjectData.map((skill) => (
            <FrontendProjectMobileView {...skill} />
          ))} */}
        </div>

        <div
          className={
            toggleState == 2
              ? "frontendProjectActiveTab"
              : "frontendProjectNotActiveTab"
          }
        >
          <h1>Tab 2</h1>
          {/* {backendProjectData.map((skill) => (
            <BackendProjectBox {...skill} />
          ))} */}
        </div>
        <div
          className={
            toggleState == 3
              ? "frontendProjectActiveTab"
              : "frontendProjectNotActiveTab"
          }
        >
          <h1>Tab 3</h1>
          {/* {backendProjectData.map((skill) => (
            <BackendProjectBox {...skill} />
          ))} */}
        </div>
        <div
          className={
            toggleState == 4
              ? "frontendProjectActiveTab"
              : "frontendProjectNotActiveTab"
          }
        >
          <h1>Tab 4</h1>
          {/* {backendProjectData.map((skill) => (
            <BackendProjectBox {...skill} />
          ))} */}
        </div>
        <div
          className={
            toggleState == 5
              ? "frontendProjectActiveTab"
              : "frontendProjectNotActiveTab"
          }
        >
          <h1>Tab 5</h1>
          {/* {backendProjectData.map((skill) => (
            <BackendProjectBox {...skill} />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default skills;
