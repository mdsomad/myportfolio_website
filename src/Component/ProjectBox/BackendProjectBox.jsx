

import React from 'react'
import BackendProjectBoxCss from "../ProjectBox/BackendProjectBox.module.css"

const BackendProjectBox = () => {
  let name = "Socal Media"
  return (
    <div className={BackendProjectBoxCss.container}>
       
         <div className={BackendProjectBoxCss.textContainer}>

          <h1 className={BackendProjectBoxCss.nameText}>Name: {name}</h1>
          <h5 className={BackendProjectBoxCss.frameworkText}>Using Framework: {name}</h5>

           <div style={{display:"flex",marginTop:"15px"}} >
           
              <h6 className={BackendProjectBoxCss.sourceCodeText}>Source Code Link :</h6>
              <h6 className={BackendProjectBoxCss.linkkText}>https://github.com/mdsomad/Social-media-backend-with-node-js</h6>
           </div>

         </div>
    </div>
  )
}

export default BackendProjectBox
