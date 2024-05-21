import styles from './navlistFooter.module.scss'

export const NavlistFooter=()=>{
    return(
        <ul className={styles.container }>
            <li>
                <a href="#main">Главная</a>
            </li>
            <li>
                <a href="#price">Направления</a>
            </li>
            <li>
                <a href="#schedule">Прайс</a>
            </li>
            <li>
                <a href="#reviews">Расписание</a>
            </li>
            <li>
                <a href="#contacts">Отзывы</a>
            </li>
            <li>
                <a href="#contacts">FAQ</a>
            </li>
            <li>
                <a href="#contacts">Контакты</a>
            </li>
        </ul>
    )
}