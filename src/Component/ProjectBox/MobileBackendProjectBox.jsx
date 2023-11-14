import MobileBackendProjectBoxCss from "./MobileBackendProjectBox.module.css";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

const MobileBackendProjectBox = (props) => {
  return (
    <div className={MobileBackendProjectBoxCss.mainContainer}>
      <div className={MobileBackendProjectBoxCss.textParentContainer}>
        <h6 className={MobileBackendProjectBoxCss.text1}>
          Name: {props.backendProjectData.appName}
        </h6>
        <h6 className={MobileBackendProjectBoxCss.text2}>
          Using Framework : {props.backendProjectData.frameworkName}
        </h6>
        <div className={MobileBackendProjectBoxCss.linkTextContainer}>
          <h6 className={MobileBackendProjectBoxCss.text3}>
            Source Code Link :
            <span style={{ color: "#589bff", marginLeft: "0.5vw" }}>
            {props.backendProjectData.sourceCodeLink}
            </span>
          </h6>
        </div>
      </div>
      <div className={MobileBackendProjectBoxCss.buttonAndLogoParentContainer}>
        <img
          className={MobileBackendProjectBoxCss.frameworkLogo}
          src= {props.backendProjectData.frameworkLogo}
          alt=""
        />
        <a
          target="_blank"
          href={props.backendProjectData.sourceCodeLink}
          rel="noopener noreferrer"
        >
          <div className={MobileBackendProjectBoxCss.buttonParentContainer}>
            <AiFillGithub className={MobileBackendProjectBoxCss.githubIcon} />
            <h6 className={MobileBackendProjectBoxCss.buttonText}>Check Now</h6>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MobileBackendProjectBox;
