
import React from 'react'
import skillsData from '@/models/languagesData'
import SkillsBox from '../SkillsBox/SkillsBox'

const Languages = () => {
  return (
    <div className='container-div'>
    {
      skillsData.map((skill)=>{
        return (
          
          <SkillsBox frameworkName={skill.name} percentageNumber={skill.percentageNumber} Progress={skill.Progress} logo={skill.logo}/>
        )
      })
    }

  </div>
  )
}

export default Languages
