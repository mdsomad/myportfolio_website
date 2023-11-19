"use client";
import React from "react";
import HomeDesktopViewCss from "./HomeDesktopView.module.css";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
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
            gap:"1.7vw",
            alignItems:"center",
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
            <img src="./images/icons-linkedin.svg" width="42vw" height="42vw" />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@Oscar-hk9gq"
            rel="noopener noreferrer"
          >
            <img src="./images/youtube.png" width="50vw" height="50vw" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/people/Md-Somad/pfbid02iXtGuZJuui1FuJaw7cq47EYAqF5TATuDndXDQUg2hLuiiDdyzja4aZJ2eQLUt4KMl/?mibextid=ZbWKwL"
            rel="noopener noreferrer"
          >
            <img src="./images/facebook-color-svgrepo-com.svg" width="40vw" height="40vw" />
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
            k41594176@gmail.com
          </h6>
          {/* <MdOutlineContentCopy className={HomeDesktopViewCss.copyMailIcon} /> */}
        </div>
      </div>

      <div className={HomeDesktopViewCss.AvatarContainer}>
        <img
          className={HomeDesktopViewCss.AvatarTag}
          src="./profile_image/profile_images.jpg"
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
  );
};

export default HomeDesktopView;
