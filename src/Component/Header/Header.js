import "../Header/Header.css"
import Link from "next/link";

import React from 'react'
import Button from "./Button"

const Header = () => {
  return (
    <div className="Header">
        <h4 style={{color:"#01EEFE",paddingLeft:"30px",fontSize:"20px",fontWeight:"bold"}} >Portfolio.</h4>

        <div
        
         style={{display:"flex",gap:"10"}}
        // className="flex gap-8"
         
         >

          <Link href="/">{<Button name={"Home"}/>}</Link>
          <Link href="/skills">{<Button name={"Skills"}/>}</Link>
          <Link href="/projects">{<Button name={"Projects"}/>}</Link>
          <Link href="/crew">{<Button name={"Crew"}/>}</Link>
          
           {
           
           /* <Button name={"Home"}/>
           <Button name={"Skills"}/>
           <Button name={"Projects"}/>
           <Button name={"Crow"}/> */}
        </div>
          
         
    </div>
  )
}

export default Header
