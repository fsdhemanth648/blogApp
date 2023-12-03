import React from 'react'
import Link from "next/link"
import styles from './MenuCategories.module.css'
import { categories } from '../categoryList/CategoryList'

function MenuCategories() {
  return (
    <div className={styles.categoryList}>
        {categories.map((category)=>{
            return (
                <Link
                    href="/blog?cat=style"
                    className={styles.categoryItem}
                    style={{
                        backgroundColor: `${category.bgColor}`
                    }}
                    key={category.id}
                >
                    {category.name}
                </Link>
            )
        })}
    </div>
  )
}

export default MenuCategories
