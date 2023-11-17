"use client";
import BackendCss from "./backend.module.css";
import backendData from "@/models/backendData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const backend = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className={BackendCss.desktopViewContainer}>
        {backendData.map((skill,index) => (
          <SkillsBox key={index} languagesData={skill} />
        ))}
      </div>
      <div className={BackendCss.mobileAndTabletVewContainer}>
        <SkillsMobileView languagesData={backendData} />
      </div>
    </>
  );
};

export default backend;
