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
            <div className={SkillsMobileViewCss.nameProgressParentDiv}>
              <h6 className={SkillsMobileViewCss.nameText}>{skill.name}</h6>
              <MobileProgressBarLabels Progress={skill.Progress} />
            </div>
            <h6 className={SkillsMobileViewCss.percentageNumberText}>
              {skill.percentageNumber}
            </h6>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsMobileView;
