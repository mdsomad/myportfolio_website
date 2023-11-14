"use client";
import "../Header/Header.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NotSelectedButton from "./NotSelectedButton";
import SelectedButton from "./SelectedButton";
// import { usePathname } from 'next/navigation';

import { usePathname } from "next/navigation";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("");
  const currentPageNew = usePathname();


  let setCurrentPageFun = (pagedata) => {
    // Component()
    setCurrentPage(pagedata)
    console.log(currentPageNew);
  };

  useEffect(() => {
    console.log(currentPageNew);
    setCurrentPage(currentPageNew)
  }, []);

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
          className={"navigationButtonContainer"}
          // className="flex gap-8"
        >
          <Link href="/" onClick={() => setCurrentPageFun("/")}>
            {" "}
            {currentPage == "/" ? (
              <SelectedButton name={"Home"} />
            ) : (
              <NotSelectedButton name={"Home"} />
            )}
          </Link>
          <Link href="/skills/languages" onClick={() => setCurrentPageFun('/skills')}>
            {currentPage.includes("/skills") ? (
              <SelectedButton name={"Skills"} />
            ) : (
              <NotSelectedButton name={"Skills"} />
            )}
          </Link>
          <Link href="/projects" onClick={() => setCurrentPageFun('/projects')}>
            {currentPage.includes("/projects") ? (
              <SelectedButton name={"Projects"} />
            ) : (
              <NotSelectedButton name={"Projects"} />
            )}
          </Link>
          <Link href="/crew" onClick={() => setCurrentPageFun('/crew')}>
            {currentPage == "/crew" ? (
              <SelectedButton name={"Crew"} />
            ) : (
              <NotSelectedButton name={"Crew"} />
            )}
          </Link>
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
