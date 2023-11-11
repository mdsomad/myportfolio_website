import React from "react";
import SkillsMobileViewCss from "../mobile_view/SkillsMobileView.module.css";
import ProgressBarLabels from "../SkillsBox/ProgressBarLabels";
import MobileProgressBarLabels from "./MobileProgressBarLabels";

const SkillsMobileView = ({ skillsData }) => {
  return (
    <div className={SkillsMobileViewCss.mainCon}>
      {skillsData.map((skill) => {
        return (
          <div className={SkillsMobileViewCss.skillItem}>
            <a href={skill.link}>
              <img
                className={SkillsMobileViewCss.imagTag}
                src={skill.logo}
                alt=""
              />
            </a>
            <div
            className={SkillsMobileViewCss.nameProgressParentDiv}
              // style={{
              //   display: "flex",
              //   flexDirection: "column",
              //   gap: "1vw",
              //   paddingLeft: "2vw",
              //   paddingBottom: "1.5vw",
              // }}
            >
              
              <h6
               className={SkillsMobileViewCss.nameText}
                // style={{ color: "white", fontSize: "3.6vw", fontWeight: "600" }}
              >
                {skill.name}
              </h6>
              <MobileProgressBarLabels Progress={skill.Progress} />
            </div>
            <h6 className={SkillsMobileViewCss.percentageNumberText}
              // style={{
              //   marginTop: "4.5vw",
              //   marginLeft: "1.5vw",
              //   color: "white",
              //   fontSize: "3.3vw",
              //   fontWeight: "500",
              // }}
            >
              {skill.percentageNumber}
            </h6>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsMobileView;
