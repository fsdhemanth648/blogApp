import React from 'react'
import styles from './BlogPage.module.css'
import CardList from '../ui/cardList/CardList'
import Menu from '../ui/menu/Menu'
function BlogPage({searchParams}) {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;;
  return (
    <div>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu/>
      </div>
    </div>
  )
}

export default BlogPage
