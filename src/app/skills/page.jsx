"use client";
import SkillsBox from "@/Component/SkillsBox/SkillsBox";
import React, { useState } from "react";

const skillTypeTabs = ["Language", "Framework", "Backend", "Design", "Extras"];

const skillData = {
  Language: [{ name: "Dart" }],
  Framework: [{ name: "Flutter" }, { name: "React" }],
  Backend: [{ name: "ExpressJS" }],
  Design: [{ name: "Figma" }],
  Extras: [],
};

const skills = () => {
  const [skillType, setSkillType] = useState("Language");

  return (
    <div className="p-4">
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

      <div className="p-10 flex flex-wrap gap-10">
        {skillData[skillType].map((skill) => (
          <SkillsBox name={skill.name} />
        ))}
      </div>
    </div>
  );
};

export default skills;
