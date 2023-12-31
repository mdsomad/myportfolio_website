"use client";
import React from "react";
import FrontendProjectMobileViewCss from "../ProjectBox/FrontendProjectMobileView.module.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const FrontendProjectMobileView = (props) => {
  return (
    <div className={FrontendProjectMobileViewCss.mainContainer}>
      <div className={FrontendProjectMobileViewCss.screenshotsContainer}>
        {props.frontendProjectData.screenshots.map((data, index) => {
          return (
            <img key={index}
              className={FrontendProjectMobileViewCss.screenshotBox}
              src={data}
              alt=""
            />
          );
        })}
      </div>
      <div className={FrontendProjectMobileViewCss.detailsContainer}>
        <h5 className={FrontendProjectMobileViewCss.projectNameText}>
          {props.frontendProjectData.appName}
        </h5>
        <div
          style={{
            display: "flex",
            width: "100%",
            paddingLeft: "6vw",
            paddingRight: "6vw",
          }}
        >
          <h6
            className={FrontendProjectMobileViewCss.projectSourceCodeLinkText}
          >
            Source Code Link :
            <span style={{ color: "#589bff", fontWeight: "300",marginLeft:"1vw" }}>
              {props.frontendProjectData.sourceCodeLink}
            </span>
          </h6>
        </div>
        <h5 className={FrontendProjectMobileViewCss.frameworkNameText}>
          Using {props.frontendProjectData.frameworkName}
        </h5>
        <div
          className={FrontendProjectMobileViewCss.frameworkLogoParentContainer}
        >
          <img
            className={FrontendProjectMobileViewCss.frameworkLogo}
            src={props.frontendProjectData.frameworkLogo}
            alt=""
          />
          <div
            style={{
              height: "100%",
              // backgroundColor:"green"
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              gap: "3vw",
            }}
          >
            {props.frontendProjectData.isYoutube == true ? (
              <a href={props.frontendProjectData.demoVideoLink}>
                <div className={FrontendProjectMobileViewCss.ButtonContainer}>
                  <AiFillYoutube
                    className={FrontendProjectMobileViewCss.youtubeIcon}
                  />
                  <h6 className={FrontendProjectMobileViewCss.buttonText}>
                    Watch Now
                  </h6>
                </div>
              </a>
            ) : null}

            <a href={props.frontendProjectData.sourceCodeLink}>
              <div className={FrontendProjectMobileViewCss.ButtonContainer}>
                <AiFillGithub
                  className={FrontendProjectMobileViewCss.githubIcon}
                />
                <h6 className={FrontendProjectMobileViewCss.buttonText}>
                  Check Now
                </h6>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontendProjectMobileView;
