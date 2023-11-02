import React from 'react'
import frameworksData from '@/models/frameworksData'
import SkillsBox from '../SkillsBox/SkillsBox'

const Frameworks = () => {
  return (
    <div className='container-div'>
      {
        frameworksData.map((skill)=>{
            return (
              <SkillsBox frameworkName={skill.name} percentageNumber={skill.percentageNumber} Progress={skill.Progress} logo={skill.logo}/>
            )
        })
      }
    </div>
  )
}

export default Frameworks
