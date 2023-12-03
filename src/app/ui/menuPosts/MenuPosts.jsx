import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './MenuPosts.module.css'

function MenuPosts({displayImage}) {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {displayImage && <div className={styles.imgContainer}>
           <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`} >
                Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet alim constrectiyrj ajhentive</h3>
            <div className={styles.details}>
                <span className={styles.userName}>&nbsp;Hemanth</span>
                <span className={styles.date}>&nbsp;- 26-11-2023</span>
            </div>
            
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {displayImage && <div className={styles.imgContainer}>
           <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`} >
                Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet alim constrectiyrj ahentive</h3>
            <div className={styles.details}>
                <span className={styles.userName}>&nbsp;Hemanth</span>
                <span className={styles.date}>&nbsp;- 26-11-2023</span>
            </div>
            
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {displayImage && <div className={styles.imgContainer}>
           <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>}
        <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`} >
                Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet alim constrecti ajhentive</h3>
            <div className={styles.details}>
                <span className={styles.userName}>&nbsp;Hemanth</span>
                <span className={styles.date}>&nbsp;- 26-11-2023</span>
            </div>
            
        </div>
        </Link>
      </div>
  )
}

export default MenuPosts
