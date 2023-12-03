import styles from "./HomePage.module.css"
import CardList from "./ui/cardList/CardList"
import CategoryList from "./ui/categoryList/CategoryList"
import Featured from "./ui/featured/Featured"
import Menu from "./ui/menu/Menu"

export default function Home() {
  return <div className={styles.home}>
    <Featured />
    <CategoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
  </div>
}
