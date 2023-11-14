import "./design.css";
import designData from "@/models/designData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";

const design = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="bodyContainer">
        <SkillsMobileView languagesData={designData} />
      </div>
    </>
  );
};

export default design;
