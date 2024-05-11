import styles from './burgerNavList.module.scss'
export const BurgerNavlist=()=>{
    return(
        <ul className={styles.container}>
            <li>
                <a href="#">ПРОГРАММЫ</a>
            </li>
            <li>
                <a href="#">ПРАЙС</a>
            </li>
            <li>
                <a href="#">РАСПИСАНИЕ</a>
            </li>
            <li>
                <a href="#">ОТЗЫВЫ</a>
            </li>
            <li>
                <a href="#">КОНТАКТЫ</a>
            </li>
        </ul>
    )
}