import styles from './imageContent.module.scss'

export const MainImg=({src})=>{
    // debugger
    return(
        <div
            className={styles.mainImg}
            style={{
                backgroundImage: `url(${src})`
            }}
        >

        </div>
    )
}