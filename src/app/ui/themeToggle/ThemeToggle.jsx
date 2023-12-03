"use client"
import React, { useContext } from 'react'
import styles from "./ThemeToggle.module.css"
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

function ThemeToggle() {

  const {theme, toogle} = useContext(ThemeContext)
  return (
    <div className={styles.themeToggle} onClick={toogle}>
      <Image src="/moon.png" alt="themeToggle" width={14} height={14}/>
      <div className={styles.ball} style={theme === "dark" ? { left: 1}: {right: 1}}></div>
      <Image src="/sun.png" alt="themeToggle" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
