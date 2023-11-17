"use client";
import HomeDesktopView from "@/Component/desktop_view/HomeDesktopView";
import HomeMobileView from "@/Component/mobile_view/HomeMobileView";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      {/* <Head>
        <meta
          name="description"
          content="I am a self taught programmer. Currently a App Developer And Web Developer And as a career path.I've app development experience of over 2+ Years.And programming experience of 3 years, Website Designers near me in Dhantola Islampur Name Md Somad And Amir Hamja"
        />
        <meta
          name="keywords"
          content="Md Somad, Amir Hamja, Dart, Flutter, JsvaScript, next.js, HTML, CSS,Node.js,Express.js, MongoDB, App Developer, Web Developer, Backend Developer, Website Designers,App Developer,✓Mobile Application Developers, Address, ✓Website Development Services, Near me in Dhantola, Islampur "
        />
        <meta name="author" content="Md Somad, Amir Hamja" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head> */}
      <div className="HomeDesktopView">
        <HomeDesktopView />
      </div>
      <div className="HomeMobileView">
        <HomeMobileView />
      </div>
    </>
  );
};

export default page;
