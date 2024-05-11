import styles from './switch.module.scss'

export const NextBtn=({goToNextSlide})=>{
    return(
        <button className={styles.nextBtn} onClick={goToNextSlide}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84308 5.00024L13.6002 9.75734C13.6496 9.80671 13.6496 9.88676 13.6002 9.93614L8.84308 14.6932" stroke="currentColor"/>
            </svg>

        </button>
    )
}   