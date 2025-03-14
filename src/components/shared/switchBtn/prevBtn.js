import styles from './switch.module.scss'

export const PrevBtn=({goToPrevSlide})=>{
    return(
        <button className={styles.prevBtn} onClick={goToPrevSlide}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1574 5.00012L6.40031 9.75721C6.35094 9.80659 6.35094 9.88664 6.40031 9.93601L11.1574 14.6931" stroke="currentColor"/>
            </svg>
        </button>
    )
}   