import { useSwipeable } from "react-swipeable";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import styles from "./mobile-nav.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname, useSearchParams } from "next/navigation";

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
                        style={{ color: "white", marginLeft: "6vw", fontSize: "6vw" }}
                    />
                </button>
            </div>

            <nav
                className={`${styles.side_nav} ${sideNavState ? styles.show : ""}`}
                {...swipeHandler}
            >
                <div className={styles.side_nav_sticky}>
                    <Link
                        href="/"
                        className={currentPage == "/" || currentPage == "/home" ? styles.SelectedLinkTagStyle : styles.NotSelectedLinkTagStyle}



                    >
                        <h6 className={styles.buttonTitle}>Home</h6>
                    </Link>
                    <Link
                        href="/skills/languages"
                        className={
                            currentPage.includes("/skills")
                                ? "SelectedLinkTagStyle"
                                : "NotSelectedLinkTagStyle"
                        }
                    >
                        <h6 className={styles.buttonTitle}>Skills</h6>
                    </Link>
                    <Link
                        href="/projects/frontendprojects"
                        className={
                            currentPage.includes("/projects")
                                ? "SelectedLinkTagStyle"
                                : "NotSelectedLinkTagStyle"
                        }
                    >
                        <h6 className={styles.buttonTitle}>Projects</h6>
                    </Link>
                    <Link
                        href="/crew"
                        className={
                            currentPage == "/crew"
                                ? "SelectedLinkTagStyle"
                                : "NotSelectedLinkTagStyle"
                        }
                    >
                        <h6 className={styles.buttonTitle}>Crew</h6>
                    </Link>
                </div>
            </nav>
        </>
    );
}