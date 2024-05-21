import styles from './socialBtn.module.scss'

export const SocialBtn=({src,mobile})=>{
    
    return(
        <button className={mobile ? styles.socialBtnMobile : styles.socialBtn}>
            {src}
        </button>
    )
}