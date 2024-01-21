import React from 'react'
import styles from "./CardList.module.css"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'

const getPosts = async (page, cat) => {
    try {
        const res = await fetch(`https://blog-app-fsdhemanth648.vercel.app/api/posts?page=${page}&cat=${cat || ""}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.log('Posts response took time.');
            return [];
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

async function CardList({ page, cat }) {
    const { posts, count } = await getPosts(page, cat);
    const POST_PER_PAGE = 2;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    return (
        <div className={styles.cardList}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {/* {JSON.stringify(posts)} */}
                {posts?.map((post) => {
                    return (
                        <Card post={post} key={post.id} />
                    )
                })}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    )
}

export default CardList
