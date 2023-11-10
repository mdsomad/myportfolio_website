"use client"
import React, { useState } from "react";
import "./crew.css";
import crewData from "@/models/crewData/crewData";
const crew = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index)
  }
  return (

<div className="mainContainer">
  <div className="tabContainer">
    <div className="tab" onClick={()=>toggleTab(1)}>
      <h6 className={toggleState == 1 ? "activeTabText" : 'notActiveTabText'}>Frontend Projects</h6>
      <div className={toggleState === 1 ? "activeTabs" : "activeNotTabs"}></div>
    </div>
    <div className="tab" onClick={()=>toggleTab(2)}>
      <h6 className={toggleState == 2 ? "activeTabText" : 'notActiveTabText'} >Backend projects</h6>
      <div className={toggleState === 2 ? "activeTabs" : "activeNotTabs"}></div>
    </div>
  </div>
  
</div>




    // <div className="container">
    //   <div className="bloc-tabs">
    //     <div className={toggleState ===1 ? "tabs active-tabs" : "tabs"}
    //      onClick={()=>toggleTab(1)}
    //     >Tab 1</div>
    //     <div className={toggleState ===2 ? "tabs active-tabs" : "tabs"}
    //      onClick={()=>toggleTab(2)}
    //     >Tab 2</div>
    //     <div className={toggleState ===3 ? "tabs active-tabs" : "tabs"}
    //        onClick={()=>toggleTab(3)}
    //     >Tab 3</div>
    //   </div>
    //   <div className="content-tabs">
    //     <div className={toggleState ===1 ? "content active-content" : "conttent"}>
    //       <h2>Conttent 1</h2>
    //     </div>
    //     <div className={toggleState ===2 ? "content active-content" : "conttent"}>
    //       <h2>Conttent 2</h2>
    //     </div>

    //     <div className={toggleState ===3 ? "content active-content" : "conttent"}>
    //       <h2>Conttent 3</h2>
    //     </div>
    //   </div>
    // </div>

    // <div className="mainContainer">
    //   {crewData.map((data) => {
    //     return (
    //       <div className="childContainer">
    //         <div className="crewTextBox">
    //           <h1 className="nameTag">Name : {data.name}</h1>
    //           <h1 className="roleTag">Role : {data.role}</h1>
    //           <div style={{ display: "flex" }}>
    //             <h1 className="websiteLinkTextTag">Website Link :</h1>
    //             <h1 className="linkTag"> {data.websiteLink}</h1>
    //           </div>
    //         </div>
    //         <div style={{ display: "flex", flexGrow: "1" }}></div>
    //         <a target="_blank" href={data.websiteLink}>
    //           <button className="visitButton">Visit Website</button>
    //         </a>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default crew;
