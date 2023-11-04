import React from "react";
import BackendProjectBoxCss from "../ProjectBox/BackendProjectBox.module.css";
import { Button } from "@material-tailwind/react";

const BackendProjectBox = () => {
  let name = "Socal Media";
  return (
    <div className={BackendProjectBoxCss.container}>
      <div className={BackendProjectBoxCss.textContainer}>
        <h1 className={BackendProjectBoxCss.nameText}>Name: {name}</h1>
        <h5 className={BackendProjectBoxCss.frameworkText}>
          Using Framework: Express.js
        </h5>

        <div style={{ display: "flex", marginTop: "15px" }}>
          <h6 className={BackendProjectBoxCss.sourceCodeText}>
            Source Code Link :
          </h6>
          <h6 className={BackendProjectBoxCss.linkkText}>
            https://github.com/mdsomad/Social-media-backend-with-node-js
          </h6>
        </div>
      </div>

      <div style={{ display: "flex", flexGrow: 1 }}></div>

      <div className={BackendProjectBoxCss.logoContainer}>
        <img
          className={BackendProjectBoxCss.frameworkLogo}
          src="./images/node-js.svg"
          alt=""
        />

        <a
          target="_blank"
          href="https://github.com/mdsomad/Social-media-backend-with-node-js"
          rel="noopener noreferrer"
        >
          <div className={BackendProjectBoxCss.buttonContainer}>
            <img
              className={BackendProjectBoxCss.buttonIcon}
              src="./images/github2.png"
            />
            <Button className={BackendProjectBoxCss.projectButtonText}>
              Check Now
            </Button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BackendProjectBox;
