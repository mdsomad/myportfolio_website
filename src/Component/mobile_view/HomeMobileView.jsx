import React from "react";
import HomeMobileViewCss from "../mobile_view/HomeMobileView.module.css";

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
    </div>
  );
};

export default HomeMobileView;
