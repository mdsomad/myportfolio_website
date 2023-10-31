"use client";

import React from 'react'
import { Progress } from "@material-tailwind/react";

 const projects = () => {
  return (
    <div>Projects


<Progress value={50} label="Completed" />;
<div className="flex w-full flex-col gap-4">
      <Progress value={25} size="sm" label="Small" />
      <Progress value={50} size="md" label="Medium" />
      <Progress value={75} size="lg" label="Large" />
    </div>
      
    </div>
  )
}


export default projects

