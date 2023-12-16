import React from 'react'
import Image from 'next/image'
import styles from './SingleBlog.module.css'
import Menu from '@/app/ui/menu/Menu'
import Comments from '@/app/ui/comments/Comments'
function SingleBlog() {
  return (
    <div className={styles.blogContainer}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.blogTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.userName}>Hemanth Babu</span>
                        <span className={styles.date}>16-12-2023</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.userImage}/>
            </div>
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.postDetails}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum magni ut porro voluptates doloremque nostrum laboriosam maiores, sequi dolores dolor architecto sapiente totam incidunt dolore eaque aperiam. In, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque reiciendis non quae vero dolores sed qui rerum eligendi dolorum. Vitae, itaque voluptatum maxime blanditiis vel velit eaque aliquid dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam molestias illum fuga architecto. Ex ut quia quibusdam! Corrupti veniam iure sint ab, pariatur itaque eveniet totam deserunt nam illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum magni ut porro voluptates doloremque nostrum laboriosam maiores, sequi dolores dolor architecto sapiente totam incidunt dolore eaque aperiam. In, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque reiciendis non quae vero dolores sed qui rerum eligendi dolorum. Vitae, itaque voluptatum maxime blanditiis vel velit eaque aliquid dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam molestias illum fuga architecto. Ex ut quia quibusdam! Corrupti veniam iure sint ab, pariatur itaque eveniet totam deserunt nam illo?</p>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum magni ut porro voluptates doloremque nostrum laboriosam maiores, sequi dolores dolor architecto sapiente totam incidunt dolore eaque aperiam. In, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque reiciendis non quae vero dolores sed qui rerum eligendi dolorum. Vitae, itaque voluptatum maxime blanditiis vel velit eaque aliquid dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam molestias illum fuga architecto. Ex ut quia quibusdam! Corrupti veniam iure sint ab, pariatur itaque eveniet totam deserunt nam illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum magni ut porro voluptates doloremque nostrum laboriosam maiores, sequi dolores dolor architecto sapiente totam incidunt dolore eaque aperiam. In, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque reiciendis non quae vero dolores sed qui rerum eligendi dolorum. Vitae, itaque voluptatum maxime blanditiis vel velit eaque aliquid dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam molestias illum fuga architecto. Ex ut quia quibusdam! Corrupti veniam iure sint ab, pariatur itaque eveniet totam deserunt nam illo?</p>
                </div>
                <div className={styles.comments}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default  SingleBlog
