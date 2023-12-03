import React from 'react'
import styles from "./Featured.module.css"
import Image from "next/image"
function Featured() {
    return (
        <div className={styles.featured}>
            <h1 className={styles.title}>
                <b>Hey, HT here! </b>Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt='' fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim constrectiyrj ajhentive</h1>
                    <p className={styles.postDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className={styles.postButton}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
