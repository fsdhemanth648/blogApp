import React from 'react'
import styles from './BlogPage.module.css'
import CardList from '../ui/cardList/CardList'
import Menu from '../ui/menu/Menu'
function BlogPage() {
  return (
    <div>
      <h1 className={styles.title}>Blog Title</h1>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default BlogPage
