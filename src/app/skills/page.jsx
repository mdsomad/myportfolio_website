"use client";
import React from 'react'
import '../skills/Skills.css'
import Languages from '@/Component/skillsPages/Languages';
import Frameworks from '@/Component/skillsPages/Frameworks';
import Backend from '@/Component/skillsPages/Backend';
import Desing from '@/Component/skillsPages/Desing';
import Extra from '@/Component/skillsPages/Extra';
// import ProgressBar from "./ProgressBarLabels.module.css"



const skills = () => {
  return (
   <>

   {/* <Languages/> */}
   {/* <Frameworks/> */}
   {/* <Backend/> */}
   <Desing/>
   <Extra/>
   
   
   </>
  )
}

export default skills


