"use client";
import HomeDesktopView from '@/Component/desktop_view/HomeDesktopView';
import './home.css';
import React from 'react'
import HomeMobileView from '@/Component/mobile_view/HomeMobileView';

const home = () => {
  return (
    <>
     <div className="HomeDesktopView" >
       <HomeDesktopView/>
     </div>
     <div className="HomeMobileView" >
       <HomeMobileView/>
     </div>
     
     </>
  )
}

export default home
