import React from "react";
import BackendProjectBoxCss from "../ProjectBox/BackendProjectBox.module.css";
import { Button } from "@material-tailwind/react";

const BackendProjectBox = (props) => {
  let name = "Socal Media";
  return (
    <div className={BackendProjectBoxCss.mainContainer}>
      <div className={BackendProjectBoxCss.textContainer}>
        <h1 className={BackendProjectBoxCss.nameText}>Name: {props.appName}</h1>
        <h5 className={BackendProjectBoxCss.frameworkText}>
          Using Framework: {props.frameworkName}
        </h5>
        <div className={BackendProjectBoxCss.sourceCodeLinkDiv}>

        <h6 className={BackendProjectBoxCss.sourceCodeText}>
          Source Code Link : 
          <samp style={{ color: "#589bff" }}>{props.sourceCodeLink}</samp>
        </h6>
        </div>
      </div>
      <div className={BackendProjectBoxCss.logoAndButtonContainer}>
        <img
          className={BackendProjectBoxCss.frameworkLogo}
          src={props.frameworkLogo}
          alt=""
        />

        <a
          target="_blank"
          href={props.sourceCodeLink}
          rel="noopener noreferrer"
        >
          <div className={BackendProjectBoxCss.buttonContainer}>
            <img
              className={BackendProjectBoxCss.buttonIcon}
              src="./images/github2.png"
            />
            <Button className={BackendProjectBoxCss.button}>Check Now</Button>
          </div>
        </a>
      </div>
    </div>

    // <div className={BackendProjectBoxCss.container}>
    //   <div className={BackendProjectBoxCss.textContainer}>

    //     <h1 className={BackendProjectBoxCss.nameText}>Name: {props.appName}</h1>
    //     <h5 className={BackendProjectBoxCss.frameworkText}>
    //       Using Framework: {props.frameworkName}
    //     </h5>

    //     <div className={BackendProjectBoxCss.sourceCodeTextAndLinkkTextContainer} >
    //       <h6 className={BackendProjectBoxCss.sourceCodeText}>
    //         Source Code Link : <samp style={{color:"#589bff"}}>{props.sourceCodeLink}</samp>
    //       </h6>
    //       <h6 className={BackendProjectBoxCss.linkkText}>
    //         {props.sourceCodeLink}
    //       </h6>
    //     </div>
    //   </div>

    //   <div style={{ display: "flex", flexGrow: 1 }}></div>

    //   <div className={BackendProjectBoxCss.logoContainer}>
    //     <img
    //       className={BackendProjectBoxCss.frameworkLogo}
    //       src={props.frameworkLogo}
    //       alt=""
    //     />

    //     <a
    //       target="_blank"
    //       href={props.sourceCodeLink}
    //       rel="noopener noreferrer"
    //     >
    //       <div className={BackendProjectBoxCss.buttonContainer}>
    //         <img
    //           className={BackendProjectBoxCss.buttonIcon}
    //           src="./images/github2.png"
    //         />
    //         <Button className={BackendProjectBoxCss.projectButtonText}>
    //           Check Now
    //         </Button>
    //       </div>
    //     </a>
    //   </div>

    // </div>
  );
};

export default BackendProjectBox;
