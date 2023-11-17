"use client";
import React from "react";
import FrontendBoxCss from "../ProjectBox/FrontendBox.module.css";

const FrontendBox = (props) => {
  return (
    <div className={FrontendBoxCss.containerdiv}>
      <div className={FrontendBoxCss.containerscreenshots}>
        {props.frontendProjectData.screenshots.map((data, index) => {
          return <img className={FrontendBoxCss.imgTag} src={data} />;
        })}
      </div>

      <div className={FrontendBoxCss.containerchild}>
        <div style={{ display: "flex", marginTop: "40px", width: "100%" }}>
          <div style={{ width: "330px" }}>
            <h3 className={FrontendBoxCss.h3}>{props.frontendProjectData.appName}</h3>
          </div>

          <div style={{ width: "220px" }}>
            <a
              target="_blank"
              href={props.frontendProjectData.sourceCodeLink}
              rel="noopener noreferrer"
            >
              <div className={FrontendBoxCss.projectViewButton}>
                <img
                  className={FrontendBoxCss.buttonprojecticon}
                  src="/images/github2.png"
                />
                <h6 className={FrontendBoxCss.h6}>Check Now</h6>
              </div>
            </a>
          </div>
        </div>

        {props.frontendProjectData.isYoutube == true ? (
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              width: "100%",
            }}
          >
            <div style={{ width: "330px" }}>
              <h3 className={FrontendBoxCss.videoTitle}>Demo Video</h3>
            </div>

            <div style={{ width: "220px" }}>
              <a
                target="_blank"
                href={props.frontendProjectData.demoVideoLink}
                rel="noopener noreferrer"
              >
                <div className={FrontendBoxCss.videoButton}>
                  <img
                    className={FrontendBoxCss.buttonprojecticon}
                    src="/images/youtube.png"
                  />
                  <h6 className={FrontendBoxCss.h6}>Watch Now</h6>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: props.isYoutube == true ? "20px" : "30px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <h5 className={FrontendBoxCss.h5}>Source code link:</h5>
          <button className={FrontendBoxCss.sourcecodetext}>
            {props.frontendProjectData.sourceCodeLink}
          </button>
        </div>

        <h1 className={FrontendBoxCss.h1}>Using {props.frontendProjectData.frameworkName}</h1>

        <img
          className={FrontendBoxCss.frameworklogoimgTag}
          src={props.frontendProjectData.frameworkLogo}
        />
      </div>
    </div>
  );
};

export default FrontendBox;
