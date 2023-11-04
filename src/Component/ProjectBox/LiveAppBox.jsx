import React from "react";
import LiveAppBoxCss from "../ProjectBox/liveAppBox.module.css";
import { Button } from "@material-tailwind/react";

const LiveAppBox = () => {
  let name = "Socal Media";
  return (
    <div className={LiveAppBoxCss.container}>
      <div className={LiveAppBoxCss.textContainer}>
        <h1 className={LiveAppBoxCss.nameText}>Name: {name}</h1>
        <h5 className={LiveAppBoxCss.frameworkText}>
          Using Framework: Express.js
        </h5>

        <div style={{ display: "flex", marginTop: "15px" }}>
          <h6 className={LiveAppBoxCss.sourceCodeText}>
            Source Code Link :
          </h6>
          <h6 className={LiveAppBoxCss.linkkText}>
            https://github.com/mdsomad/Social-media-backend-with-node-js
          </h6>
        </div>
      </div>

      <div style={{ display: "flex", flexGrow: 1 }}></div>

      <div className={LiveAppBoxCss.logoContainer}>
        <img
          className={LiveAppBoxCss.frameworkLogo}
          src="./images/node-js.svg"
          alt=""
        />

        <a
          target="_blank"
          href="https://github.com/mdsomad/Social-media-backend-with-node-js"
          rel="noopener noreferrer"
        >
          <div className={LiveAppBoxCss.buttonContainer}>
            <img
              className={LiveAppBoxCss.buttonIcon}
              src="./images/github2.png"
            />
            <Button className={LiveAppBoxCss.projectButtonText}>
              Check Now
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LiveAppBox;
