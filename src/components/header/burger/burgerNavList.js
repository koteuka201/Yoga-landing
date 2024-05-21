import styles from './burgerNavList.module.scss'
export const BurgerNavlist=()=>{
    return(
        <ul className={styles.container}>
            <li>
                <a href="#main">ПРОГРАММЫ</a>
            </li>
            <li>
                <a href="#price">ПРАЙС</a>
            </li>
            <li>
                <a href="#schedule">РАСПИСАНИЕ</a>
            </li>
            <li>
                <a href="#reviews">ОТЗЫВЫ</a>
            </li>
            <li>
                <a href="#contacts">КОНТАКТЫ</a>
            </li>
        </ul>
    )
}