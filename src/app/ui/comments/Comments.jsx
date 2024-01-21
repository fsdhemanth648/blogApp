"use client"

import React, { useState } from 'react'
import styles from './Comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async (url) =>{
    const res = await fetch(url);

    const data = await res.json();

    if(!res.ok){
        const error = new Error(data.message);
        throw error;
    }
    return data;
}

function Comments({postSlug}) {
    const {status} = useSession()
    const {data, isLoading ,mutate} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

    const [comment, setComment] = useState("");

    const handleComment = async () =>{
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({
                desc: comment,
                postSlug
            })
        })
        setComment("")
        mutate()
    }

  return (
    <div className={styles.commntsContainer}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.inputContainer}>
                <textarea placeholder='Write a comment...' value={comment} className={styles.input} onChange={(e)=> setComment(e.target.value)}/>
                <div className='flex justify-end mt-3'>
                    <button className={styles.sendBtn} onClick={handleComment}>Send</button>
                </div>
            </div>
        ):(
            <div className='text-center bg-slate-400 px-2 py-2'>
                <Link href="/login">Login to write a comment</Link>
            </div>
        )}
        <div className={styles.comments}>
            {isLoading ? "Loading" : data?.map((item)=>(
                <div className={styles.comment} key={item.id}>
                {item.user && (
                    <div className={styles.user}>
                    <Image src={item.user?.image} alt='img' width={50} height={50} className={styles.userImage}/>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>{item.user?.name}</span>
                        <span className={styles.date}>{item?.createdAt.substring(0, 10)}</span>
                    </div>
                </div>
                )}
                
                <p className={styles.userComment}>
                    {item.desc}
                </p>
            </div>
            ))}

        </div>

    </div>
  )
}

export default Comments
