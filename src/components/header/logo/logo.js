
// import LogoImage from '../../../../public/assets/logo.svg'
import styles from './logo.module.scss'
export const Logo= () => {
    return (
        <a href='#' className={styles.container}>
            <img src='/assets/logo.svg' className={styles.logo} alt="logo" />
            <span>Balance</span>
        </a>
    )
}