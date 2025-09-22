import React from "react";
import HomeMobileViewCss from "../mobile_view/HomeMobileView.module.css";
import { Button } from "@material-tailwind/react";
import liveAppData from "@/models/projectData/liveAppsData";
import { IoCall } from "react-icons/io5";
import { MdOutlineContentCopy, MdEmail } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import { TypeAnimation } from "react-type-animation";
import useClipboard from "react-use-clipboard";

const HomeMobileView = () => {
  const [isPhoneNumCopied, setPhoneNumCopied] = useClipboard("8942998873");
  const [isEmailCopied, setEmailCopied] = useClipboard("amirhamja.developer@gmail.com");

  return (
    <div className={HomeMobileViewCss.mainDiv}>
      <img
        className={HomeMobileViewCss.AvatarTag}
        src="./profile_image/profile_images.jpg"
        alt="Avatar"
      />

      <h5 className={HomeMobileViewCss.h5Tag}>Hello, It’s Me</h5>
      <h1 className={HomeMobileViewCss.nameTag}>Md Somad</h1>
      <h1 className={HomeMobileViewCss.h1Tag}>And I’m an</h1>
      <h1 className={HomeMobileViewCss.developerTag}>
        {" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "App Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Web Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h1>

      <p className={HomeMobileViewCss.descriptionTag}>
        I am a self taught programmer. <br /> Currently a App Developer as a
        career path. <br />
        I've app development experience of over 3+ Years. <br />
        And programming experience of 4 years.
      </p>

      <div className={HomeMobileViewCss.playStoreLogoAndliveAppTextParentContainer}>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/dev?id=6634717439171184150"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.playStoreLogo}
            src="./images/Google_Play-Icon.svg"
            alt="Google Play Store"
          />
        </a>
        <h6 className={HomeMobileViewCss.liveAppText}>Live Apps</h6>
      </div>

      {liveAppData.map((data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            height: "13vw",
            marginBottom: "1.5vw",
            paddingRight: "5vw",
            // backgroundColor:"red"
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

      <div className={HomeMobileViewCss.linkIconAndSocialMediaParentContainer}>
        <PiLinkSimpleBold className={HomeMobileViewCss.linkIconStyle} />{" "}
        <h6 className={HomeMobileViewCss.socialMediaTextStyle}>Social Media</h6>
      </div>

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
          <img
            className={HomeMobileViewCss.socialMediaIcon}
            src="./images/icons8-github.svg"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/md_somad"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.socialMediaIcon}
            src="./images/icons-instagram.svg"
          />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/MdSomad1"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.socialMediaIcon}
            src="./images/icons-twitter.svg"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/md-somad-8827ab256"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.socialMediaIcon}
            src="./images/icons-linkedin.svg"
          />
        </a>
      </div>
      <div className={HomeMobileViewCss.youtube_facebook_parent_container}>
        <a
          target="_blank"
          href="https://www.youtube.com/@Oscar-hk9gq"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.youtube_logo_img}
            src="./images/youtube-svglogo.svg"
          />
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/people/Md-Somad/pfbid02iXtGuZJuui1FuJaw7cq47EYAqF5TATuDndXDQUg2hLuiiDdyzja4aZJ2eQLUt4KMl/?mibextid=ZbWKwL"
          rel="noopener noreferrer"
        >
          <img
            className={HomeMobileViewCss.facebook_logo_img}
            src="./images/facebook-color-svgrepo-com.svg"
          />
        </a>
      </div>

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
        <h6 className={HomeMobileViewCss.phoneNumberText}>+91 8942998873</h6>
        <MdOutlineContentCopy
          onClick={setPhoneNumCopied}
          className={HomeMobileViewCss.copyIcon}
        />
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
        <h6 className={HomeMobileViewCss.phoneNumberText}>
         amirhamja.developer@gmail.com
        </h6>
        <MdOutlineContentCopy
          onClick={setEmailCopied}
          className={HomeMobileViewCss.copyMailIcon}
        />
      </div>
    </div>
  );
};

export default HomeMobileView;
