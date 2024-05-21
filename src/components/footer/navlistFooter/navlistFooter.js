import styles from './navlistFooter.module.scss'

export const NavlistFooter=()=>{
    return(
        <ul className={styles.container }>
            <li>
                <a href="#main">Главная</a>
            </li>
            <li>
                <a href="#referral">Направления</a>
            </li>
            <li>
                <a href="#price">Прайс</a>
            </li>
            <li>
                <a href="#schedule">Расписание</a>
            </li>
            <li>
                <a href="#reviews">Отзывы</a>
            </li>
            <li>
                <a href="#FAQ">FAQ</a>
            </li>
            <li>
                <a href="#contacts">Контакты</a>
            </li>
        </ul>
    )
}