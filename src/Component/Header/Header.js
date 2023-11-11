import "../Header/Header.css";
import Link from "next/link";

import React from "react";
import Button from "./Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="Header">
        <h4
          style={{
            color: "#01EEFE",
            paddingLeft: "30px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Portfolio.
        </h4>

        <div
          style={{ display: "flex", gap: "10" }}
          // className="flex gap-8"
        >
          <Link href="/">{<Button name={"Home"} />}</Link>
          <Link href="/skills">{<Button name={"Skills"} />}</Link>
          <Link href="/projects">{<Button name={"Projects"} />}</Link>
          <Link href="/crew">{<Button name={"Crew"} />}</Link>
        </div>
      </div>
      {/* HeaderMobile Code*/}
      <div className="HeaderMobile">
        <RxHamburgerMenu
          style={{ color: "white", marginLeft: "6vw", fontSize: "5vw" }}
        />
        <div className="gap:1"></div>

        <h4
          style={{
            color: "#01EEFE",
            paddingRight: "3vw",
            fontSize: "5vw",
            fontWeight: "bold",
          }}
        >
          Portfolio.
        </h4>

        {/* <div
          style={{ display: "flex", gap: "10" }}
          // className="flex gap-8"
        >
          <Link href="/home">{<Button name={"mobilehome"} />}</Link>
          <Link href="/skills">{<Button name={"Skills"} />}</Link>
          <Link href="/projects">{<Button name={"Projects"} />}</Link>
          <Link href="/crew">{<Button name={"Crew"} />}</Link>
        </div> */}
      </div>
    </>
  );
};

export default Header;
