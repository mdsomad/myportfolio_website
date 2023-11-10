import React from "react";
import SkillsMobileViewCss from "../mobile_view/SkillsMobileView.module.css";
import ProgressBarLabels from "../SkillsBox/ProgressBarLabels";
import MobileProgressBarLabels from "./MobileProgressBarLabels";

const SkillsMobileView = () => {
  return (
    <div className={SkillsMobileViewCss.mainCon}>
      <div
        //  className={SkillsMobileViewCss.items}
        className={SkillsMobileViewCss.skillItem}

        // style={{ backgroundColor: "green" }}
      >
        <img
          className={SkillsMobileViewCss.imagTag}
          src="./images/flutter.svg"
          alt=""
        />
        <div style={{display:"flex",flexDirection:"column", gap:"1vw",paddingLeft:"2vw",paddingBottom:"1.5vw"}}>
          <h6 style={{color:"white",fontSize:"3.5vw",fontWeight:"600"}}>Flutter</h6>
          <MobileProgressBarLabels />
        </div>
        <h6 style={{marginTop:"4.5vw",marginLeft:"1.5vw",color:"white",fontSize:"3.3vw",fontWeight:"500"}}>90%</h6>
      </div>
      <div
        //  className={SkillsMobileViewCss.items}
        className={SkillsMobileViewCss.skillItem}

        // style={{ backgroundColor: "green" }}
      >
        <img
          className={SkillsMobileViewCss.imagTag}
          src="./images/flutter.svg"
          alt=""
        />
        <div style={{display:"flex",flexDirection:"column", gap:"1vw",paddingLeft:"2vw",paddingBottom:"1.5vw"}}>
          <h6 style={{color:"white",fontSize:"3.5vw",fontWeight:"600"}}>Flutter</h6>
          <MobileProgressBarLabels />
        </div>
        <h6 style={{marginTop:"4.5vw",marginLeft:"1.5vw",color:"white",fontSize:"3.3vw",fontWeight:"500"}}>90%</h6>
      </div>
      <div
        //  className={SkillsMobileViewCss.items}
        className={SkillsMobileViewCss.skillItem}

        // style={{ backgroundColor: "green" }}
      >
        <img
          className={SkillsMobileViewCss.imagTag}
          src="./images/flutter.svg"
          alt=""
        />
        <div style={{display:"flex",flexDirection:"column", gap:"1vw",paddingLeft:"2vw",paddingBottom:"1.5vw"}}>
          <h6 style={{color:"white",fontSize:"3.5vw",fontWeight:"600"}}>Flutter</h6>
          <MobileProgressBarLabels />
        </div>
        <h6 style={{marginTop:"4.5vw",marginLeft:"1.5vw",color:"white",fontSize:"3.3vw",fontWeight:"500"}}>90%</h6>
      </div>
     
    </div>
  );
};

export default SkillsMobileView;
