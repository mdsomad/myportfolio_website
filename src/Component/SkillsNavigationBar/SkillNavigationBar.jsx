import Link from 'next/link'
import React from 'react';
import SkillNavigationBarCss from "./SkillNavigationBar.module.css"

const SkillNavigationBar = () => {
  return (
    <div className={SkillNavigationBarCss.mainContainer}>
    <Link href="/skills/languages" className={SkillNavigationBarCss.linkTag}>Languages </Link>
    <Link href="/skills/frameworks" className={SkillNavigationBarCss.linkTag}>Frameworks </Link>
    <Link href="/skills/backend" className={SkillNavigationBarCss.linkTag}>Backend </Link>
    <Link href="/skills/design" className={SkillNavigationBarCss.linkTag}>Desin </Link>
    <Link href="/skills/extra" className={SkillNavigationBarCss.linkTag}>Extra </Link>
    </div>
  )
}

export default SkillNavigationBar
