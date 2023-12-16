import React from 'react'
import styles from './Comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
function Comments() {
    const status = "authenticated"
  return (
    <div className={styles.commntsContainer}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.inputContainer}>
                <textarea placeholder='Write a comment...' className={styles.input}/>
                <div className='flex justify-end mt-3'>
                    <button className={styles.sendBtn}>Send</button>
                </div>
            </div>
        ):(
            <div className='text-center bg-slate-400 px-2 py-2'>
                <Link href="/login">Login to write a comment</Link>
            </div>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.userImage}/>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Hemanth Babu</span>
                        <span className={styles.date}>16-12-2023</span>
                    </div>
                </div>
                <p className={styles.userComment}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, eaque ullam culpa nesciunt amet voluptatibus? Assumenda corrupti fugit, perspiciatis facere nam rem harum vel, sint soluta natus dolore laborum doloremque?
                </p>
            </div>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src='/p1.jpeg' alt='' width={50} height={50} className={styles.userImage}/>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Hemanth Babu</span>
                        <span className={styles.date}>16-12-2023</span>
                    </div>
                </div>
                <p className={styles.userComment}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, eaque ullam culpa nesciunt amet voluptatibus? Assumenda corrupti fugit, perspiciatis facere nam rem harum vel, sint soluta natus dolore laborum doloremque?
                </p>
            </div>
        </div>

    </div>
  )
}

export default Comments
