import styles from './navlist.module.scss'

export const Navlist=()=>{
    return(
        <ul className={styles.container }>
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