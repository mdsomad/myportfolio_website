import "../SkillsBox/SkillsBox.css";
import React from "react";
import ProgressBarLabels from "./ProgressBarLabels";

const SkillsBox = (props) => {
  return (
    <div className="skillsBox">
      <a target="_blank" href={props.languagesData.link} rel="noopener noreferrer">
        <img
        className={props.languagesData.name === "Flutter"? "flutterLogoStyle": "imaTag"}
          src={props.languagesData.logo}
        />
      </a>

      <div style={{ display:"flex",flexDirection:"column", gap:"0.2vw" }}>
        <h5 style={{color: "white",fontSize:"1vw", fontWeight:"500"}}>{props.languagesData.name}</h5>
        <ProgressBarLabels Progress={props.languagesData.Progress} />
      </div>

      <h5 style={{ paddingTop: "1.4vw",fontSize:"0.9vw", color: "white" }}>
        {props.languagesData.percentageNumber}
      </h5>
    </div>
  );
};

export default SkillsBox;
