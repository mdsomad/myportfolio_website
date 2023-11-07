import React from 'react'

const HomeDesktopView = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="mainBox">
        <div className="mainBox2">
          <h5 className="h5">Hello, It’s Me</h5>
          <h1 className="h1">Md Somad</h1>

          <div style={{ display: "flex" }}>
            <h1 className="h1">And I’m an</h1>
            <h1 className="texrow">App Developer</h1>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <a
              target="_blank"
              href="https://github.com/mdsomad"
              rel="noopener noreferrer"
            >
              <img src="./images/icons8-github.svg" width="50" height="50" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/md_somad"
              rel="noopener noreferrer"
            >
              <img src="./images/icons-instagram.svg" width="50" height="50" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/MdSomad1"
              rel="noopener noreferrer"
            >
              <img src="./images/icons-twitter.svg" width="50" height="50" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/md-somad-8827ab256"
              rel="noopener noreferrer"
            >
              <img src="./images/icons-linkedin.svg" width="50" height="50" />
            </a>
          </div>

          <div>
            <div
              style={{ display: "flex", width: "300px", paddingTop: "20px" }}
            >
              <img src="./images/call.png" width="28" height="28" />
              <h4 className="phoneNumberh4Tag">91+ 8942998873</h4>
            </div>
            <div
              style={{ display: "flex", width: "300px", paddingTop: "20px" }}
            >
              <img src="./images/email.png" width="35" height="28" />
              <h4 className="phoneNumberh4Tag">mdsomad10@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="mainAvatarDiv">
        <div className="colDiv">
          <div className="AvatarDiv">
            <img src="./images/profile-image.jpg" />
          </div>

          <p
            style={{
              textAlign: "center",
              paddingTop: "30px",
              paddingRight: "20px",
              fontSize: "20px",
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

      {/* <img src="./images/google-play.svg"/> */}
    </div>
  )
}

export default HomeDesktopView
