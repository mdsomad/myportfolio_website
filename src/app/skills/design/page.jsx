import DesignCss from "./design.module.css";
import designData from "@/models/designData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const design = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className={DesignCss.desktopViewContainer}>
        {designData.map((skill,index) => (
          <SkillsBox key={index} languagesData={skill} />
        ))}
      </div>
      <div className={DesignCss.mobileAndTabletVewContainer}>
        <SkillsMobileView languagesData={designData} />
      </div>
    </>
  );
};

export default design;
