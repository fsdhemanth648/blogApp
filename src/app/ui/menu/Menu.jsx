import React from 'react'
import styles from "./Menu.module.css"
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

function Menu() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.subTitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts displayImage={false}/>
    
      <h2 className={styles.subTitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
     
     
      <h2 className={styles.subTitle}>Choosen by the editior</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts displayImage={true}/>
      
    </div>
  )
}

export default Menu
