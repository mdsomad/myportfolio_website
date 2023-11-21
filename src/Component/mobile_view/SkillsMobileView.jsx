import React from "react";
import SkillsMobileViewCss from "../mobile_view/SkillsMobileView.module.css";
import MobileProgressBarLabels from "./MobileProgressBarLabels";

const SkillsMobileView = (props) => {
  return (
    <div className={SkillsMobileViewCss.mainCon}>
      {props.languagesData.map((data,index) => {
        return (
          <div key={index} className={SkillsMobileViewCss.skillItem}>
            <a href={data.link}>
        
              <img
                className={SkillsMobileViewCss.imagTag}
                src={data.logo}
                alt=""
              />
            </a>
            <div className={SkillsMobileViewCss.nameProgressParentDiv}>
              <h6 className={SkillsMobileViewCss.nameText}>{data.name}</h6>
              <MobileProgressBarLabels Progress={data.Progress} />
            </div>
            <h6 className={SkillsMobileViewCss.percentageNumberText}>
              {data.percentageNumber}
            </h6>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsMobileView;
