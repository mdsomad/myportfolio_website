"use client";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";
import { useEffect, useRef, useState } from "react";
import styles from "./mobile-nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useSearchParams } from "next/navigation";
import { IoClose } from "react-icons/io5";

export default function MobileNav() {
  const [sideNavState, setSideNavState] = useState(false);
  const sideNavRef = useRef(null);

  function toggleSideNavState() {
    setSideNavState(!sideNavState);
  }

  const swipeHandler = useSwipeable({
    onSwipedLeft: (e) => toggleSideNavState(),
  });

  const [currentPage, setCurrentPage] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPage(pathname);
    // console.log("call useEffect");
    // console.log("call Now pathname --> "+{pathname});
  }, [pathname]);

  return (
    <>
      <div className={styles.header_navigation}>
        <button className={styles.button} onClick={toggleSideNavState}>
          <RxHamburgerMenu
            style={{ color: "var(--textColorWithe)", fontSize: "6vw" }}
          />
        </button>

        <div className="gap:1"></div>

        <h4
          style={{
            color: "var(--Cyan)",
            paddingRight: "3vw",
            fontSize: "5vw",
            fontWeight: "bold",
          }}
        >
          Portfolio.
        </h4>
        
      </div>

      <nav
        className={`${styles.side_nav} ${sideNavState ? styles.show : ""}`}
        {...swipeHandler}
      >
        <div className={styles.side_nav_sticky}>
          <div className={styles.side_nav_close_parent_container}>
            <IoClose
              onClick={toggleSideNavState}
              className={styles.side_nav_close_icons}
            />
          </div>
          <div className={styles.link_buttons_parent_container}>
            <Link
              href="/"
              onClick={toggleSideNavState}
              className={
                currentPage == "/" || currentPage == "/home"
                  ? styles.SelectedLinkTagStyle
                  : styles.NotSelectedLinkTagStyle
              }
            >
              Home
            </Link>
            <Link
              href="/skills/languages"
              onClick={toggleSideNavState}
              className={
                currentPage.includes("/skills")
                  ? styles.SelectedLinkTagStyle
                  : styles.NotSelectedLinkTagStyle
              }
            >
              Skills
            </Link>
            <Link
              href="/projects/frontendprojects"
              onClick={toggleSideNavState}
              className={
                currentPage.includes("/projects")
                  ? styles.SelectedLinkTagStyle
                  : styles.NotSelectedLinkTagStyle
              }
            >
              Projects
            </Link>
            <Link
              href="/crew"
              onClick={toggleSideNavState}
              className={
                currentPage == "/crew"
                  ? styles.SelectedLinkTagStyle
                  : styles.NotSelectedLinkTagStyle
              }
            >
              Crew
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
