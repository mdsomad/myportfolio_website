import React from "react";

import FrontendBoxCss from "../ProjectBox/FrontendBox.module.css";

const FrontendBox = () => {
  return (
    // <div className={forn.cont}></div>

    <div className={FrontendBoxCss.containerdiv}>
      <div className={FrontendBoxCss.containerscreenshots}>
        <div className={FrontendBoxCss.screenshotsbox}>
          <img
            className={FrontendBoxCss.img}
            src="./screenshots/Screenshot_1690008176.png"
          />
        </div>
        <div className={FrontendBoxCss.screenshotsbox}>
          <img
            className={FrontendBoxCss.img}
            src="./screenshots/Screenshot_1690008176.png"
          />
        </div>
        <div className={FrontendBoxCss.screenshotsbox}>
          <img
            className={FrontendBoxCss.img}
            src="./screenshots/Screenshot_1690008176.png"
          />
        </div>
        <div className={FrontendBoxCss.screenshotsbox}>
          <img
            className={FrontendBoxCss.img}
            src="./screenshots/Screenshot_1690008176.png"
          />
        </div>
      </div>

      <div className={FrontendBoxCss.containerchild}>
        <div style={{ display: "flex", marginTop: "40px", gap: "50px" }}>
          <h3 className={FrontendBoxCss.h3}>Socal Media</h3>

          <a
            target="_blank"
            href="https://github.com/mdsomad/Social_Media_App_Frontend_in_Flutter"
            rel="noopener noreferrer"
          >
            <div className={FrontendBoxCss.buttonproject}>
              <img
                className={FrontendBoxCss.buttonprojecticon}
                src="./images/github2.png"
              />
              <h6 className={FrontendBoxCss.h6}>Check Now</h6>
            </div>
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "start",
            marginTop: "30px",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <h5 className={FrontendBoxCss.h5}>Source code link:</h5>
          <button className={FrontendBoxCss.sourcecodetext}>
            https://github.com/mdsomad/Social_Media_App_Frontend_in_Flutter
          </button>
        </div>

        <h1 className={FrontendBoxCss.h1}>Using Flutter</h1>

        <img
          className={FrontendBoxCss.frameworklogoimgTag}
          src="./images/flutter.svg"
        />
      </div>
    </div>

    //   <div className="container-div">
    //   <div className="container-screenshots">
    //     <div className="screenshots-box">
    //       <img src="./screenshots/Screenshot_1690008176.png" />
    //     </div>
    //     <div className="screenshots-box">
    //       <img src="./screenshots/Screenshot_1690008176.png" />
    //     </div>
    //     <div className="screenshots-box">
    //       <img src="./screenshots/Screenshot_1690008176.png" />
    //     </div>
    //     <div className="screenshots-box">
    //       <img src="./screenshots/Screenshot_1690008176.png" />
    //     </div>
    //   </div>

    //   <div className="container-child">
    //     <div style={{ display: "flex", marginTop: "40px", gap: "50px" }}>
    //       <h3>Socal Media</h3>

    //       <a
    //         target="_blank"
    //         href="https://github.com/mdsomad/Social_Media_App_Frontend_in_Flutter"
    //         rel="noopener noreferrer"
    //       >
    //         <div className="button-project">
    //           <img className="button-project-icon" src="./images/github2.png"/>
    //           <h6>Check Now</h6>
    //         </div>
    //       </a>
    //     </div>

    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "start",
    //         marginTop: "30px",
    //         overflow: "hidden",
    //         width: "100%",
    //       }}
    //     >
    //       <h5>Source code link:</h5>
    //       <button className="source-code-text">
    //         https://github.com/mdsomad/Social_Media_App_Frontend_in_Flutter
    //       </button>
    //     </div>

    //     <h1>Using Flutter</h1>

    //     <img className="frameworklogo-imgTag" src="./images/flutter.svg" />
    //   </div>
    // </div>
  );
};

export default FrontendBox;
