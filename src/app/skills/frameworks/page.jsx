import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import "./frameworks.css";
import frameworksData from "@/models/frameworksData";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const frameworks = () => {
  return (
    <>
    <SkillNavigationBar />
    <div className="desktopViewContainer">
        {frameworksData.map((skill) => (
          <SkillsBox languagesData={skill} />
        ))}
      </div>
    <div className="mobileAndTabletVewContainer">
      <SkillsMobileView languagesData={frameworksData} />
    </div>
  </>
  );
};

export default frameworks;
