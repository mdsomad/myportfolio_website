import "./languages.css";
import React from "react";
import languagesData from "@/models/languagesData";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";

const languages = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="desktopViewContainer">
        {languagesData.map((skill) => (
          <SkillsBox languagesData={skill} />
        ))}
      </div>
      <div className="mobileAndTabletVewContainer">
        <SkillsMobileView languagesData={languagesData} />
      </div>
    </>
  );
};

export default languages;
