"use client";
import HomeDesktopView from "@/Component/desktop_view/HomeDesktopView";
import HomeMobileView from "@/Component/mobile_view/HomeMobileView";
import Image from "next/image";

import React from "react";

const page = () => {
  return (
     <>
     <div className="HomeDesktopView" >
       <HomeDesktopView/>
     </div>
     <div className="HomeMobileView" >
       <HomeMobileView/>
     </div>
     
     </>
  );
};

export default page;
