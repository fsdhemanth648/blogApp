import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'



function Navbar() {
    const links = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Contact",
            url: "/"
        },
        {
            name: "About",
            url: "/"
        },
    
    ]

    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <Image className={styles.logo} src="/hLogo/logo-color.svg" alt='logo' width={40} height={40}/>
               
            </div>
            <div className={styles.logoName}>
               Blog
            </div>
            <div className={styles.links}>
                {links.map((link)=>{
                    return(
                        <Link className={styles.link} key={link.name} href={link.url}>{link.name}</Link>
                    )
                })}
                <ThemeToggle/>
                <AuthLinks/>
            </div>
        </div>
    )
}

export default Navbar
