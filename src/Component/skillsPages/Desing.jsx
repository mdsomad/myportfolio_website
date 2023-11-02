import React from 'react'
import designData from '@/models/designData'
import SkillsBox from '../SkillsBox/SkillsBox'

const Desing = () => {
  return (
    <div className='container-div'>
    {
      designData.map((skill)=>{
          return (
            <SkillsBox frameworkName={skill.name} percentageNumber={skill.percentageNumber} Progress={skill.Progress} logo={skill.logo}/>
          )
      })
    }
  </div>
  )
}

export default Desing
