import styles from './logo.module.scss'

export const LogoFooter=()=>{
    return(
        <a href="#" className={styles.container}>
            <img src="/assets/logo (1).svg" className={styles.logo} alt="logo" />
            <span>Balance</span>
        </a>
    )
}