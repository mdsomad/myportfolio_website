import "./backend.css";
import backendData from "@/models/backendData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const backend = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="desktopViewContainer">
        {backendData.map((skill) => (
          <SkillsBox languagesData={skill} />
        ))}
      </div>
      <div className="mobileAndTabletVewContainer">
        <SkillsMobileView languagesData={backendData} />
      </div>
    </>
  );
};

export default backend;
