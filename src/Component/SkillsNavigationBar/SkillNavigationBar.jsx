"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SkillNavigationBarCss from "./SkillNavigationBar.module.css";
import { usePathname } from "next/navigation";

const SkillNavigationBar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const getCurrentPage = usePathname();

  let setCurrentPageFunction = (pagedata) => {
    setCurrentPage(pagedata);
  };

  useEffect(() => {
    console.log(getCurrentPage);
    setCurrentPage(getCurrentPage);
  }, []);

  return (
    <div className={SkillNavigationBarCss.mainContainer}>
      <Link href="/skills/languages" className={currentPage == "/skills/languages" || currentPage == "/skills" ? SkillNavigationBarCss.selectedlinkTag: SkillNavigationBarCss.linkTag}>
        Languages{" "}
      </Link>
      <Link href="/skills/frameworks" className={currentPage.includes("frameworks") ? SkillNavigationBarCss.selectedlinkTag: SkillNavigationBarCss.linkTag}>
        Frameworks{" "}
      </Link>
      <Link href="/skills/backend" className={currentPage.includes("backend") ? SkillNavigationBarCss.selectedlinkTag: SkillNavigationBarCss.linkTag}>
        Backend{" "}
      </Link>
      <Link href="/skills/design" className={currentPage.includes("design") ? SkillNavigationBarCss.selectedlinkTag: SkillNavigationBarCss.linkTag}>
        Desin{" "}
      </Link>
      <Link href="/skills/extra" className={currentPage.includes("extra") ? SkillNavigationBarCss.selectedlinkTag: SkillNavigationBarCss.linkTag}>
        Extra{" "}
      </Link>
    </div>
  );
};

export default SkillNavigationBar;
