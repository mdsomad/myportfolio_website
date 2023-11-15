"use client";
import "../Header/Header.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NotSelectedButton from "./NotSelectedButton";
import SelectedButton from "./SelectedButton";
import { usePathname, useSearchParams } from 'next/navigation'


const Header = () => {
  const [currentPage, setCurrentPage] = useState("");
  const pathname = usePathname()

  
  useEffect(() => {
    setCurrentPage(pathname);
    // console.log("call useEffect");
    // console.log("call Now pathname --> "+{pathname});
  }, [pathname]);

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
          {/* Current pathname: {pathname} */}
          Portfolio.
        </h4>

        <div
          className={"navigationButtonContainer"}
          // className="flex gap-8"
        >
          <Link
            href="/"
            // onClick={() => setCurrentPage(pathname)}
          >
            {currentPage == "/" || currentPage == "/home" ? (
              <SelectedButton name={"Home"} />
            ) : (
              <NotSelectedButton name={"Home"} />
            )}
          </Link>
          <Link
            href="/skills/languages"
            //  onClick={() => setCurrentPage(pathname)}
          >
            {currentPage.includes("/skills") ? (
              <SelectedButton name={"Skills"} />
            ) : (
              <NotSelectedButton name={"Skills"} />
            )}
          </Link>
          <Link
            href="/projects/frontendprojects"
            //  onClick={() => setCurrentPage(pathname)}
          >
            {currentPage.includes("/projects") ? (
              <SelectedButton name={"Projects"} />
            ) : (
              <NotSelectedButton name={"Projects"} />
            )}
          </Link>
          <Link
            href="/crew"
            //  onClick={() => setCurrentPage(pathname)}
          >
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
