
import "../SkillsBox/SkillsBox.css"
import React from 'react'
import ProgressBarLabels from "./ProgressBarLabels"

const SkillsBox = () => {
  return (
     <div className="skillsBox">
      <img style={{paddingLeft:"15px",paddingRight:'10px'}} src="./images/flutter.svg" width="75" height="75" />

      <div style={{paddingBottom:"10px"}}>
          <h5 style={{paddingBottom:"5px",color:"white"}} >Flutter</h5>
          <ProgressBarLabels/>
      </div>
      
      <h5 style={{paddingTop:"18px",paddingLeft:"10px",color:"white"}} >90%</h5>


         
            
    </div>
  )
}

export default SkillsBox
