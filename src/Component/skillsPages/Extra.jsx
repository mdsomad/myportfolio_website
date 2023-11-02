import React from 'react'
import extraData from '@/models/extraData'
import SkillsBox from '../SkillsBox/SkillsBox'

const Extra = () => {
  return (
    <div className='container-div'>
    {
      extraData.map((skill)=>{
          return (
            <SkillsBox frameworkName={skill.name} percentageNumber={skill.percentageNumber} Progress={skill.Progress} logo={skill.logo}/>
          )
      })
    }
  </div>
  )
}

export default Extra
