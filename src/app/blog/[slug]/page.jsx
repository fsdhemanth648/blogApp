import React from 'react'
import Image from 'next/image'
import styles from './SingleBlog.module.css'
import Menu from '@/app/ui/menu/Menu'
import Comments from '@/app/ui/comments/Comments'

const getPost = async (slug) => {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
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

async function SingleBlog({params}) {
    const {slug} = params;

    const data = await getPost(slug)
  return (
    <div className={styles.blogContainer}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.blogTitle}>{data?.title} </h1>
                {data.user ? (
                    <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src={data.user?.image} alt='' fill className={styles.image}/>
                    </div>
                    
                    <div className={styles.userTextContainer}> 
                        <span className={styles.userName}>{data.user?.name}</span>
                        <span className={styles.date}>{data?.createdAt.substring(0,10)}</span>
                    </div>
                </div>
                ) : <h1>Unknown</h1>}
                
            </div>
            {data.img && (
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='post cover' fill className={styles.userImage}/>
            </div>
            )}
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.postDetails} dangerouslySetInnerHTML={{__html: data?.desc}}/>
                    
                <div className={styles.comments}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default  SingleBlog
