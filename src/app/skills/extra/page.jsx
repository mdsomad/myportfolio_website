import ExtraCss from "./extra.module.css";
import extraData from "@/models/extraData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const extra = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className={ExtraCss.desktopViewContainer}>
        {extraData.map((skill) => (
          <SkillsBox languagesData={skill} />
        ))}
      </div>
      <div className={ExtraCss.mobileAndTabletVewContainer}>
        <SkillsMobileView languagesData={extraData} />
      </div>
    </>
  );
};

export default extra;
