import styles from './signBtn.module.scss'

export const PlusBtn=({addStyle})=>{
    return(
        <button className={styles.plusBtn}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="5.9436" x2="12" y2="5.9436" stroke="currentColor"/>
                <line x1="5.97253" y1="12" x2="5.97253" stroke="currentColor"/>
            </svg>

        </button>
    )
}