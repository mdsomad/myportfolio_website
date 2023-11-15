import FrameworksCss from "./frameworks.module.css";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import frameworksData from "@/models/frameworksData";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const frameworks = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className={FrameworksCss.desktopViewContainer}>
        {frameworksData.map((skill) => (
          <SkillsBox languagesData={skill} />
        ))}
      </div>
      <div className={FrameworksCss.mobileAndTabletVewContainer}>
        <SkillsMobileView languagesData={frameworksData} />
      </div>
    </>
  );
};

export default frameworks;
