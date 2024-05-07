import styles from './notation.module.scss'
export const Notation=()=>{
    return(
        <div className={styles.container}>
            <div>
                <span className={styles.number}>6 </span>
                <span className={styles.text}>
                    направлений в одном абонементе
                </span>
            </div>
            <div>
                <span className={styles.number}>4 </span>
                <span className={styles.text}>тренера с большим практическим опытом</span>
            </div>
            <div>
                <span className={styles.number}>2 </span>
                <span className={styles.text}>просторных зала для занятий</span>
            </div>
        </div>
    )
}