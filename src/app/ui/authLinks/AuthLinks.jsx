"use client"

import React, { useState } from 'react'
import styles from "./AuthLinks.module.css"
import Link from 'next/link'
function AuthLinks() {

  const [openMenu, setOpenMenu] = useState(false)

  const status = "authe"
  return (
    <>
      {status === "auth" ? (
        <Link href="/login" >Login</Link>
      ): (
      <>
        <Link href="/write" className='hidden md:block'>Write</Link>
        <span className='hidden md:block'>
          <button>Logout</button>
        </span>
      </>
      )}
      <div className={styles.mobileMenu} onClick={()=> setOpenMenu(!openMenu)}>
        <div className={styles.line}/>
        <div className={styles.line}/>
        <div className={styles.line}/>
      </div>
      {openMenu && (
        <div className={styles.responsiveMenu}>
          <Link href="/write">Home</Link>
          <Link href="/write">About</Link>
          <Link href="/write">Contact</Link>
          {status === "auth" ? (
            <Link href="/login">Login</Link>
          ): (
            <>
              <Link href="/write">Write</Link>
              <span>
                  <button>Logout</button>
              </span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
