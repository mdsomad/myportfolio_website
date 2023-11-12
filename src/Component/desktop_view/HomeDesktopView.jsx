"use client";
import React from "react";
import HomeDesktopViewCss from "./HomeDesktopView.module.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { propTypesAnimation } from "@material-tailwind/react/types/generic";
import { TypeAnimation } from "react-type-animation";

const HomeDesktopView = () => {
  return (
    <div className={HomeDesktopViewCss.mainContainer}>
      <div className={HomeDesktopViewCss.textContainer}>
        <h1 className={HomeDesktopViewCss.text1}>Hello, It’s Me</h1>
        <h1 className={HomeDesktopViewCss.text2}>Md Somad</h1>
        <div style={{
          // backgroundColor:"yellow", 
          width: "40vw" }}>
          <h1 className={HomeDesktopViewCss.text3}>
            And I’m an{" "}
            <span style={{ color: "#01eefe", fontSize: "1.3vw" }}>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "App Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                  "Backend Developer",
                  1000,
                  
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </span>
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2.5vw",
            // justifyContent: "space-between",
            // width: "18vw",
          }}
        >
          <a
            target="_blank"
            href="https://github.com/mdsomad"
            rel="noopener noreferrer"
          >
            <img src="./images/icons8-github.svg" width="50vw" height="50vw" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/md_somad"
            rel="noopener noreferrer"
          >
            <img
              src="./images/icons-instagram.svg"
              width="50vw"
              height="50vw"
            />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/MdSomad1"
            rel="noopener noreferrer"
          >
            <img src="./images/icons-twitter.svg" width="50vw" height="50vw" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/md-somad-8827ab256"
            rel="noopener noreferrer"
          >
            <img src="./images/icons-linkedin.svg" width="50vw" height="50vw" />
          </a>
        </div>

        <div className={HomeDesktopViewCss.contactDetailsContainer}>
          <IoCall className={HomeDesktopViewCss.callIcon} />
          <h6 className={HomeDesktopViewCss.phoneNumberText}>91+ 8942998873</h6>
          {/* <MdOutlineContentCopy className={HomeDesktopViewCss.copyIcon} /> */}
        </div>

        <div className={HomeDesktopViewCss.contactDetailsContainer}>
          <MdEmail className={HomeDesktopViewCss.emailIcon} />
          <h6 className={HomeDesktopViewCss.phoneNumberText}>
            mdsomad@gmail.com
          </h6>
          {/* <MdOutlineContentCopy className={HomeDesktopViewCss.copyMailIcon} /> */}
        </div>
      </div>

      <div className={HomeDesktopViewCss.AvatarContainer}>
        <img
          className={HomeDesktopViewCss.AvatarTag}
          src="./images/profile-image.jpg"
        />
        <p
          style={{
            textAlign: "center",
            fontSize: "1.2vw",
            color: "white",
          }}
        >
          I am a self taught programmer. <br /> Currently a App Developer as a
          career path. <br />
          I've app development experience of over 2+ Years. <br />
          And programming experience of 3 years.
        </p>
      </div>
    </div>

    // <div style={{ display: "flex" }}>
    //   <div className={HomeDesktopViewCss.mainBox}>
    //     <div className={HomeDesktopViewCss.mainBox2}>
    //       <h5 className={HomeDesktopViewCss.h5}>Hello, It’s Me</h5>
    //       <h1 className={HomeDesktopViewCss.h1}>Md Somad</h1>

    //       <div style={{ display: "flex" }}>
    //         <h1 className={HomeDesktopViewCss.h1}>And I’m an <span style={{color:"#01eefe"}}>App Developer</span></h1>
    //       </div>

    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           width: "300px",
    //         }}
    //       >
    //         <a
    //           target="_blank"
    //           href="https://github.com/mdsomad"
    //           rel="noopener noreferrer"
    //         >
    //           <img src="./images/icons8-github.svg" width="50vw" height="50vw" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://www.instagram.com/md_somad"
    //           rel="noopener noreferrer"
    //         >
    //           <img src="./images/icons-instagram.svg" width="50vw" height="50vw" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://twitter.com/MdSomad1"
    //           rel="noopener noreferrer"
    //         >
    //           <img src="./images/icons-twitter.svg" width="50vw" height="50vw" />
    //         </a>
    //         <a
    //           target="_blank"
    //           href="https://www.linkedin.com/in/md-somad-8827ab256"
    //           rel="noopener noreferrer"
    //         >
    //           <img src="./images/icons-linkedin.svg" width="50vw" height="50vw" />
    //         </a>
    //       </div>

    //       <div>
    //         <div
    //           style={{ display: "flex", width: "300px", paddingTop: "20px" }}
    //         >
    //           <img src="./images/call.png" width="28" height="28" />
    //           <h4 className={HomeDesktopViewCss.phoneNumberh4Tag}>91+ 8942998873</h4>
    //         </div>
    //         <div
    //           style={{ display: "flex", width: "300px", paddingTop: "20px" }}
    //         >
    //           <img src="./images/email.png" width="35" height="28" />
    //           <h4  className={HomeDesktopViewCss.phoneNumberh4Tag}>mdsomad10@gmail.com</h4>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className={HomeDesktopViewCss.mainAvatarDiv}>
    //     <div className={HomeDesktopViewCss.colDiv}>
    //       <div className={HomeDesktopViewCss.AvatarDiv}>
    //         <img className={HomeDesktopViewCss.imageTag} src="./images/profile-image.jpg" />
    //       </div>

    //       <p
    //         style={{
    //           textAlign: "center",
    //           paddingTop: "30px",
    //           paddingRight: "20px",
    //           fontSize: "20px",
    //           color: "white",
    //         }}
    //       >
    //         I am a self taught programmer. <br /> Currently a App Developer as a
    //         career path. <br />
    //         I've app development experience of over 2+ Years. <br />
    //         And programming experience of 3 years.
    //       </p>
    //     </div>
    //   </div>

    // </div>
  );
};

export default HomeDesktopView;
