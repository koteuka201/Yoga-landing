import styles from './signBtn.module.scss'

export const MinusBtn=()=>{
    return(
        <button className={styles.minusBtn}>
            <svg width="12" height="1" viewBox="0 0 12 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="12" y2="0.5" stroke="currentColor"/>
            </svg>
        </button>
    )
}