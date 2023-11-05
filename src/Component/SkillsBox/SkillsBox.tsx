import "../SkillsBox/SkillsBox.css";
import React from "react";
import ProgressBarLabels from "./ProgressBarLabels";
import skills from "@/app/skills/page";

const SkillsBox = (props) => {
  return (
    <div className="skillsBox">
      <a target="_blank" href={props.link} rel="noopener noreferrer">
        <img
          style={{ paddingLeft: "15px", marginRight: "15px" }}
          src={props.logo}
          width="70"
          height="70"
        />
      </a>

      <div style={{ paddingBottom: "10px" }}>
        <h5 style={{ paddingBottom: "5px", color: "white" }}>{props.name}</h5>
        <ProgressBarLabels Progress={props.Progress} />
      </div>

      <h5 style={{ paddingTop: "18px", paddingLeft: "10px", color: "white" }}>
        {props.percentageNumber}
      </h5>
    </div>
  );
};

export default SkillsBox;
