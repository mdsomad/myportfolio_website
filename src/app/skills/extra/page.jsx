import extraData from "@/models/extraData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";

const extra = () => {
  return (
    <>
    <SkillNavigationBar />
    <div className="bodyContainer">
      <SkillsMobileView languagesData={extraData} />
    </div>
  </>
  );
};

export default extra;
