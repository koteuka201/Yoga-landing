import styles from './progressBar.module.scss'

export const ProgressBar=({currentIndex,images})=>{
    return(
        <div className={styles.progressContainer}>
            <div
            className={styles.progressBar}
            style={{ width: `${((currentIndex + 1) / images) * 100}%` }}
            />
        </div>
    )
}