import React from 'react'
import Link from "next/link"
import styles from './MenuCategories.module.css'
// import { categories } from '../categoryList/CategoryList'
export const categories = [
    {
        id: 1,
        name: "style",
        image: "/style.png",
        bgColor: "#FF5733",
        url: "/blog?cat=style"
    },
    {
        id: 2,
        name: "fashion",
        image: "/fashion.png",
        bgColor: "#F39C12",
        url: "/blog?cat=fashion"
    },
    {
        id: 3,
        name: "food",
        image: "/food.png",
        bgColor: "#DAF7A6",
        url: "/blog?cat=food"
    },
    {
        id: 4,
        name: "travel",
        image: "/travel.png",
        bgColor: "#C70039",
        url: "/blog?cat=travel"
    },
    {
        id: 5,
        name: "culture",
        image: "/culture.png",
        bgColor: "#FFC300",
        url: "/blog?cat=culture"
    },
    {
        id: 6,
        name: "coding",
        image: "/coding.png",
        bgColor: "#900C3F",
        url: "/blog?cat=coding"
    }
]
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
