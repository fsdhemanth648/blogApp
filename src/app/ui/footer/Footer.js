import React from 'react'
import styles from "./Footer.module.css"
import Image from "next/image"
import Link from 'next/link'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt='logo' width={50} height={50} />
                    <h1 className={styles.logoText}>HT dev</h1>
                </div>
                <p className={styles.desc}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt='' width={18} height={18} />
                    <Image src="/instagram.png" alt='' width={18} height={18} />
                    <Image src="/tiktok.png" alt='' width={18} height={18} />
                    <Image src="/youtube.png" alt='' width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/">Home</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Food</Link>
                    <Link href="/">Fashion</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/">Youtube</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Tiktok</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
