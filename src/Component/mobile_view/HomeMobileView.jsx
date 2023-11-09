import React from "react";
import HomeMobileViewCss from "../mobile_view/HomeMobileView.module.css";
import { Button } from "@material-tailwind/react";
import liveAppData from "@/models/projectData/liveAppsData";
import { IoCall } from "react-icons/io5";
import { MdOutlineContentCopy,MdEmail } from "react-icons/md";

const HomeMobileView = () => {
  return (
    <div className={HomeMobileViewCss.mainDiv}>
      <img
        className={HomeMobileViewCss.AvatarTag}
        src="./images/profile-image.jpg"
        alt="Avatar"
      />

      <h5 className={HomeMobileViewCss.h5Tag}>Hello, It’s Me</h5>
      <h1 className={HomeMobileViewCss.nameTag}>Md Somad</h1>
      <h1 className={HomeMobileViewCss.h1Tag}>And I’m an</h1>
      <h1 className={HomeMobileViewCss.developerTag}>App Developer</h1>

      <p className={HomeMobileViewCss.descriptionTag}>
        I am a self taught programmer. <br /> Currently a App Developer as a
        career path. <br />
        I've app development experience of over 2+ Years. <br />
        And programming experience of 3 years.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          marginBottom: "5vw",
        }}
      >
        <a
          target="_blank"
          href="https://github.com/mdsomad"
          rel="noopener noreferrer"
        >
          <img className={HomeMobileViewCss.socialMediaIcon} src="./images/icons8-github.svg" />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/md_somad"
          rel="noopener noreferrer"
        >
          <img className={HomeMobileViewCss.socialMediaIcon} src="./images/icons-instagram.svg"/>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/MdSomad1"
          rel="noopener noreferrer"
        >
          <img className={HomeMobileViewCss.socialMediaIcon} src="./images/icons-twitter.svg" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/md-somad-8827ab256"
          rel="noopener noreferrer"
        >
          <img className={HomeMobileViewCss.socialMediaIcon} src="./images/icons-linkedin.svg" />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
        }}
      >
        <a
          target="_blank"
          href="https://play.google.com/store/apps/dev?id=6634717439171184150"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.playStoreLogo}
            src="./images/google-play-store.png"
            alt="Google Play Store"
          />
        </a>
        <h6 className={HomeMobileViewCss.liveAppText}>Live Apps</h6>
      </div>

      <div className={HomeMobileViewCss.divider}></div>

      {liveAppData.map((data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            marginBottom: "5vw",
            paddingRight: "5vw",
          }}
        >
          <img
            className={HomeMobileViewCss.liveApplogo}
            src={data.appLogo}
            alt="App Icon"
          />
          <h6 className={HomeMobileViewCss.appNameText}>
            Name : {data.appName}
          </h6>
          <div style={{ display: "flex", flexGrow: "1" }}></div>

          <a
            target="_blank"
            href={data.googlePlayStoreLink}
            rel="noopener noreferrer"
          >
            <Button className={HomeMobileViewCss.appInstallButton}>
              Install Now
            </Button>
          </a>
        </div>
      ))}

     

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          paddingLeft: "7vw",
          marginBottom: "5vw",
        }}
      >
        <IoCall className={HomeMobileViewCss.callIcon} />
        <h6 className={HomeMobileViewCss.phoneNumberText}>91+ 8942998873</h6>
        <MdOutlineContentCopy className={HomeMobileViewCss.copyIcon} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          paddingLeft: "7vw",
          marginBottom: "7vw",
        }}
      >
        <MdEmail className={HomeMobileViewCss.emailIcon} />
        <h6 className={HomeMobileViewCss.phoneNumberText}>mdsomad@gmail.com</h6>
        <MdOutlineContentCopy className={HomeMobileViewCss.copyMailIcon} />
      </div>
    </div>
  );
};

export default HomeMobileView;
