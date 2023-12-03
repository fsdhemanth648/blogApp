import React from 'react'
import styles from "./Pagination.module.css"
function Pagination() {
    return (
        <div className={styles.pagination}>
            <button className={styles.btn}>Previous</button>
            <button className={styles.btn}>Next</button>
        </div>
    )
}

export default Pagination
