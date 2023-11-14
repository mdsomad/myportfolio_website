import "./design.css";
import designData from "@/models/designData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const design = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="desktopViewContainer">
        {designData.map((skill) => (
          <SkillsBox languagesData={skill} />
        ))}
      </div>
      <div className="mobileAndTabletVewContainer">
        <SkillsMobileView languagesData={designData} />
      </div>
    </>
  );
};

export default design;
