import styles from './phone.module.scss'

export const Phone=()=>{
    return(
        <div className={styles.container }>
            <img className={styles.phone} src="/assets/phone.svg" alt="phoneNumber" />
            <div>+7 (924) 444-77-77</div>
        </div>
    )
}