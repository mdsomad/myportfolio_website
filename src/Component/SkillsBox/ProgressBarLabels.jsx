import React from "react";
import ProgressBar from "./ProgressBarLabels.module.css";

const ProgressBarLabels = ({ Progress }) => {
  return (
    <div className={ProgressBar.ProgressBarLabels}>
      <div
        //  className={ProgressBar.ProgressBarLabelsColor}
        style={{
          height: "100%",
          width: `${Progress}%`,
          borderRadius: "1.5vw",
          backgroundColor: "#01EEFE",
        }}
      ></div>
    </div>
  );
};
export default ProgressBarLabels;
