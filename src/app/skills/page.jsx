"use client";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";
import React, { useState } from "react";

import "../skills/Skills.css";

import languagesData from "@/models/languagesData";
import frameworksData from "@/models/frameworksData";
import backendData from "@/models/backendData";
import designData from "@/models/designData";
import extraData from "@/models/extraData";

const skillTypeTabs = ["Language", "Framework", "Backend", "Design", "Extra"];

const skillData = {
  Language: languagesData,
  Framework: frameworksData,
  Backend: backendData,
  Design: designData,
  Extra: extraData,
};

// import ProgressBar from "./ProgressBarLabels.module.css"

const skills = () => {
  const [skillType, setSkillType] = useState("Language");

  return (
    <div className="p-4 py-0">
      <div className="flex w-[100%] justify-between p-4 py-10">
        {skillTypeTabs.map((skillType_) => (
          <button
            className={`px-10 py-2 text-white font-bold ${
              skillType === skillType_ &&
              `text-[#01eefe] border-b-4 border-[#01eefe]`
            }`}
            onClick={() => {
              setSkillType(skillType_);
            }}
          >
            {skillType_}
          </button>
        ))}
      </div>

      <div className="px-4 pl-10 flex flex-wrap gap-10">
        {skillData[skillType].map((skill) => (
          <SkillsBox {...skill} />
        ))}
      </div>
    </div>
  );
};

export default skills;
