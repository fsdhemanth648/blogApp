import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'
import Link from "next/link"

function Card() {
  return (
    <div className={styles.post}>
        <div className={styles.imgContainer}>
           <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>26-11-2023&nbsp;-</span>
                <span className={styles.category}>&nbsp;CULTURE</span>
            </div>
            <Link href="/">
                <h1>Lorem ipsum dolor sit amet alim constrectiyrj ajhentive</h1>
            </Link>
            <p className={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <Link href="/" className={styles.link}>Learn More</Link>
        </div>
    </div>
  )
}

export default Card
