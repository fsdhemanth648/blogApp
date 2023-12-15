import React from 'react'
import styles from "./CategoryList.module.css"
import Link from "next/link"
import Image from "next/image"
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
function CategoryList() {
    
    return (
        <div className={styles.categoryList}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {categories.map((category)=>{
                    return(
                        <Link className={styles.category} style={{backgroundColor: `${category.bgColor}`}} key={category.id} href={category.url}>
                            <Image src={category.image} alt={category.name} width={40} height={40} className={styles.image}/>
                            {category.name}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryList
