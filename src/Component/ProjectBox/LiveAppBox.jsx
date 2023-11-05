import React from "react";
import LiveAppBoxCss from "../ProjectBox/liveAppBox.module.css";
import { Button } from "@material-tailwind/react";

const LiveAppBox = (props) => {
  return (
    <div className={LiveAppBoxCss.container}>
      <div className={LiveAppBoxCss.textContainer}>
        <h1 className={LiveAppBoxCss.nameText}>Name: {props.appName}</h1>

        <p
          dangerouslySetInnerHTML={{ __html: props.description }}
          style={{ color: "white" }}
        ></p>

        <div
          style={{ display: "flex", marginTop: "5px", marginBottom: "30px" }}
        >
          <h6 className={LiveAppBoxCss.sourceCodeText}>Play Store :</h6>
          <h6 className={LiveAppBoxCss.linkkText}>
            {props.googlePlayStoreLink}
          </h6>
        </div>
      </div>

      <div style={{ display: "flex", flexGrow: 1 }}></div>

      <div className={LiveAppBoxCss.logoContainer}>
        <img
          className={LiveAppBoxCss.frameworkLogo}
          src={props.appLogo}
          alt=""
        />

        <a
          target="_blank"
          href={props.googlePlayStoreLink}
          rel="noopener noreferrer"
        >
          <div className={LiveAppBoxCss.buttonContainer}>
            <img
              className={LiveAppBoxCss.buttonIcon}
              src="./images/google-play-store.png"
            />
            <Button className={LiveAppBoxCss.projectButtonText}>
              Install Now
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LiveAppBox;
