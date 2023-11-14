import "./languages.css";
import React from "react";
import languagesData from "@/models/languagesData";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";

const languages = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="bodyContainer">
        <SkillsMobileView languagesData={languagesData} />
      </div>
    </>
  );
};

export default languages;
