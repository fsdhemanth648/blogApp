import React from 'react'
import styles from "./CardList.module.css"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'


function CardList() {
    return (
        <div className={styles.cardList}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
                <hr />
                <Card />
                <hr />
                <Card />
                {/* <Card /> */}
            </div>
            <Pagination />
        </div>
    )
}

export default CardList
