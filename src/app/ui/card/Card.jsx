import React from 'react'
import styles from "./Card.module.css"
import Image from 'next/image'
import Link from "next/link"

function Card({post}) {
  return (
    <div className={styles.post}>
      {post.img && (
        <div className={styles.imgContainer}>
           <Image src={post.img} alt="" fill className={styles.image}/>
        </div>
      )}
        <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>{post.createdAt.substring(0, 10)}&nbsp;-</span>
                <span className={styles.category}>&nbsp;{post.catSlug}</span>
            </div>
            <Link href={`https://blog-app-fsdhemanth648.vercel.app/blog/${post.slug}`}>
                <h1>{post.title}</h1>
            </Link>
            <p className={styles.desc}>{post.desc.substring(0, 60)}...</p>
            <Link href={`https://blog-app-fsdhemanth648.vercel.app/blog/${post.slug}`} className={styles.link}>Learn More</Link>
        </div>
    </div>
  )
}

export default Card
