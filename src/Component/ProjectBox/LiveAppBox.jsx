"use client";
import React from "react";
import LiveAppBoxCss from "./LiveAppBox.module.css";

const LiveAppBox = (props) => {
  return (
    <div className={LiveAppBoxCss.mainContainer}>
      <div className={LiveAppBoxCss.textParentContainer}>
        <h6 className={LiveAppBoxCss.text1}>
          Name: {props.liveAppData.appName}
        </h6>
        <div className={LiveAppBoxCss.descriptionTextParentContainer}>
          <p
            //  dangerouslySetInnerHTML={{ __html: props.liveAppData.description }}
            className={LiveAppBoxCss.descriptionText}
          >
            {props.liveAppData.description}
          </p>
        </div>
        <div className={LiveAppBoxCss.linkTextContainer}>
          <h6 className={LiveAppBoxCss.text3}>
            Google Play Store :
            <span style={{ color: "#589bff", marginLeft: "0.5vw" }}>
              {props.liveAppData.googlePlayStoreLink}
            </span>
          </h6>
        </div>
      </div>
      <div className={LiveAppBoxCss.buttonAndLogoParentContainer}>
        <img
          className={LiveAppBoxCss.frameworkLogo}
          src={props.liveAppData.appLogo}
          alt=""
        />
        <a
          target="_blank"
          href={props.liveAppData.googlePlayStoreLink}
          rel="noopener noreferrer"
        >
          <div className={LiveAppBoxCss.buttonParentContainer}>
            {/* <AiFillGithub className={LiveAppBoxCss.githubIcon} /> */}
            <img
              className={LiveAppBoxCss.buttonLogo}
              src="/images/google-play-store.png"
            />
            <h6 className={LiveAppBoxCss.buttonText}>Install Now</h6>
          </div>
        </a>
      </div>
    </div>

    // <div className={LiveAppBoxCss.container}>
    //   <div className={LiveAppBoxCss.textContainer}>
    //     <h1 className={LiveAppBoxCss.nameText}>
    //       Name: {props.liveAppData.appName}
    //     </h1>

    //     <p
    //       dangerouslySetInnerHTML={{ __html: props.liveAppData.description }}
    //       style={{ color: "white" }}
    //     ></p>

    //     <div
    //       style={{ display: "flex", marginTop: "5px", marginBottom: "30px" }}
    //     >
    //       <h6 className={LiveAppBoxCss.sourceCodeText}>Play Store :</h6>
    //       <h6 className={LiveAppBoxCss.linkkText}>
    //         {props.liveAppData.googlePlayStoreLink}
    //       </h6>
    //     </div>
    //   </div>

    //   <div style={{ display: "flex", flexGrow: 1 }}></div>

    //   <div className={LiveAppBoxCss.logoContainer}>
    //     <img
    //       className={LiveAppBoxCss.frameworkLogo}
    //       src={props.liveAppData.appLogo}
    //       alt=""
    //     />

    //     <a
    //       target="_blank"
    //       href={props.liveAppData.googlePlayStoreLink}
    //       rel="noopener noreferrer"
    //     >
    //       <div className={LiveAppBoxCss.buttonContainer}>
    //         <img
    //           className={LiveAppBoxCss.buttonIcon}
    //           src="/images/google-play-store.png"
    //         />
    //         <button className={LiveAppBoxCss.projectButtonText}>
    //           Install Now
    //         </button>
    //       </div>
    //     </a>
    //   </div>
    // </div>
  );
};

export default LiveAppBox;
