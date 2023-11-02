import React from 'react'
import backendData from '@/models/backendData'
import SkillsBox from '../SkillsBox/SkillsBox'

const Backend = () => {
  return (
    <div className='container-div'>
    {
      backendData.map((skill)=>{
          return (
            <SkillsBox frameworkName={skill.name} percentageNumber={skill.percentageNumber} Progress={skill.Progress} logo={skill.logo}/>
          )
      })
    }
  </div>
  )
}

export default Backend
