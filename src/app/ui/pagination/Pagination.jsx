"use client"
import React from 'react'
import styles from "./Pagination.module.css"
import { useRouter } from 'next/navigation'
function Pagination({page, hasPrev, hasNext}) {
    const router = useRouter();
    return (
        <div className={styles.pagination}>
            <button className={styles.btn} disabled={!hasPrev} onClick={()=> router.push(`?page=${page - 1}`)}>Previous</button>
            <button className={styles.btn} disabled={!hasNext} onClick={()=> router.push(`?page=${page + 1}`)}>Next</button>
        </div>
    )
}

export default Pagination
