import React from "react";
import MobileProgressBar from "../mobile_view/MobileProgressBarLabels.module.css";

const MobileProgressBarLabels = ({ Progress }) => {
  return (
    <div className={MobileProgressBar.ProgressBarLabels}>
      <div
        //  className={ProgressBar.MobileProgressBarLabelsColor}
        style={{
          height: "100%",
          width: `${Progress}%`,
          // width: `80%`,
          borderRadius: "3vw",
          backgroundColor: "var(--Cyan)",
        }}
      ></div>
    </div>
  );
};
export default MobileProgressBarLabels;
