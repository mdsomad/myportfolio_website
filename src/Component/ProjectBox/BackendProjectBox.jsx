import React from "react";
import BackendProjectBoxCss from "../ProjectBox/BackendProjectBox.module.css";

const BackendProjectBox = (props) => {
  return (
    <div className={BackendProjectBoxCss.mainContainer}>
      <div className={BackendProjectBoxCss.textContainer}>
        <h1 className={BackendProjectBoxCss.nameText}>Name: {props.backendProjectData.appName}</h1>
        <h5 className={BackendProjectBoxCss.frameworkText}>
          Using Framework: {props.backendProjectData.frameworkName}
        </h5>
        <div className={BackendProjectBoxCss.sourceCodeLinkDiv}>

        <h6 className={BackendProjectBoxCss.sourceCodeText}>
          Source Code Link :  
          <samp style={{ color: "#589bff" ,marginLeft:"0.5vw"}}>{props.backendProjectData.sourceCodeLink}</samp>
        </h6>
        </div>
      </div>
      <div className={BackendProjectBoxCss.logoAndButtonContainer}>
        <img
          className={BackendProjectBoxCss.frameworkLogo}
          src={props.backendProjectData.frameworkLogo}
          alt=""
        />

        <a
          target="_blank"
          href={props.backendProjectData.sourceCodeLink}
          rel="noopener noreferrer"
        >
          <div className={BackendProjectBoxCss.buttonContainer}>
            <img
              className={BackendProjectBoxCss.buttonIcon}
              src="/images/github2.png"
            />
            <button className={BackendProjectBoxCss.button}>Check Now</button>
          </div>
        </a>
      </div>
    </div>

  );
};

export default BackendProjectBox;
