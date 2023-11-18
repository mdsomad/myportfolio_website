"use client";
import "../Header/Header.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useSearchParams } from "next/navigation";
import MobileNav from "../mobile-nav/mobile-nav.component";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("");
  const pathname = usePathname();

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

        <div className={"navigationButtonContainer"}>
          <Link
            href="/"
            className={
              currentPage == "/" || currentPage == "/home"
                ? "SelectedLinkTagStyle"
                : "NotSelectedLinkTagStyle"
            }
          >
            <h6>Home</h6>
          </Link>
          <Link
            href="/skills/languages"
            className={
              currentPage.includes("/skills")
                ? "SelectedLinkTagStyle"
                : "NotSelectedLinkTagStyle"
            }
          >
            <h6>Skills</h6>
          </Link>
          <Link
            href="/projects/frontendprojects"
            className={
              currentPage.includes("/projects")
                ? "SelectedLinkTagStyle"
                : "NotSelectedLinkTagStyle"
            }
          >
            <h6>Projects</h6>
          </Link>
          <Link
            href="/crew"
            className={
              currentPage == "/crew"
                ? "SelectedLinkTagStyle"
                : "NotSelectedLinkTagStyle"
            }
          >
            <h6>Crew</h6>
          </Link>
        </div>
      </div>
      {/* HeaderMobile Code*/}
      <div className="HeaderMobile">


<MobileNav/>

       
        {/* <div className="gap:1"></div>

        <h4
          style={{
            color: "#01EEFE",
            paddingRight: "3vw",
            fontSize: "5vw",
            fontWeight: "bold",
          }}
        >
          Portfolio.
        </h4> */}

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
