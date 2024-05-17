import styles from './imageContent.module.scss'

export const SideImg=({src})=>{
    
    return(
        <div
            className={styles.sideImg}
            style={{
                backgroundImage: `url(${src})`
            }}
        >

        </div>
    )
}