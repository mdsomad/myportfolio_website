import React from 'react'
import ProgressBar from "./ProgressBarLabels.module.css"

const ProgressBarLabels = ({Progress}) => {
  return (
   <div className={ProgressBar.ProgressBarLabels}>
     
     <div 
    //  className={ProgressBar.ProgressBarLabelsColor}
    style={{
      height: '12px',
      width: `${Progress}%`,
      borderRadius:'7px',
      backgroundColor:'#01EEFE',
    }}
     
     >

    
</div>

   </div>

  )
}

export default ProgressBarLabels
