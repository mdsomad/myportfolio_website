import "./backend.css";
import backendData from "@/models/backendData";
import SkillNavigationBar from "@/Component/SkillsNavigationBar/SkillNavigationBar";
import React from "react";
import SkillsMobileView from "@/Component/mobile_view/SkillsMobileView";

const backend = () => {
  return (
    <>
      <SkillNavigationBar />
      <div className="bodyContainer">
        <SkillsMobileView languagesData={backendData} />
      </div>
    </>
  );
};

export default backend;
