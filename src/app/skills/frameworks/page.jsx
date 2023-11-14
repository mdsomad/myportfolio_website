import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import "./frameworks.css";
import frameworksData from "@/models/frameworksData";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";

const frameworks = () => {
  return (
    <>
    <SkillNavigationBar />
    <div className="bodyContainer">
      <SkillsMobileView languagesData={frameworksData} />
    </div>
  </>
  );
};

export default frameworks;
