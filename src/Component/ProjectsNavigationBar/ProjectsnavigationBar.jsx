"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProjectsnavigationBarCss from "./ProjectsnavigationBar.module.css";
import { usePathname } from "next/navigation";

const ProjectsnavigationBar = () => {
  const [currentPage, setCurrentPage] = useState("");
  const getCurrentPage = usePathname();

 

  useEffect(() => {
    // console.log(getCurrentPage);
    setCurrentPage(getCurrentPage);
  }, [usePathname]);

  return (
    <div className={ProjectsnavigationBarCss.mainContainer}>
      <Link
        href="/projects/frontendprojects"
        className={
          currentPage == "/projects" || currentPage == "/projects/frontendprojects"
            ? ProjectsnavigationBarCss.selectedlinkTag
            : ProjectsnavigationBarCss.linkTag
        }
      >
        Frontend Projects
      </Link>
      <Link
        href="/projects/backendprojects"
        className={
          currentPage.includes("backendprojects")
            ? ProjectsnavigationBarCss.selectedlinkTag
            : ProjectsnavigationBarCss.linkTag
        }
      >
        Backend projects
      </Link>
      <Link
        href="/projects/liveapps"
        className={
          currentPage.includes("liveapps")
            ? ProjectsnavigationBarCss.selectedlinkTag
            : ProjectsnavigationBarCss.linkTag
        }
      >
        Live Apps
      </Link>
    </div>
  );
};

export default ProjectsnavigationBar;
