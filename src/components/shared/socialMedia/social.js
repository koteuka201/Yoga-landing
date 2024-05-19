import styles from './social.module.scss'

export const SocialBlock=({mobile})=>{
    return(
        <div className={styles.container}>

            {mobile ? (
                <div 
                className={styles.vkMobile}
                style={{backgroundImage: `url('/assets/socialMedia/VK_hover.svg')`}}
                
                >
                </div>
            ) : (
                <div 
                className={styles.vk}
                style={{backgroundImage: `url('/assets/socialMedia/VK.svg')`}}
                
                >
                </div>
            )}
            {mobile ? (
                <div 
                className={styles.vkMobile}
                style={{backgroundImage: `url('/assets/socialMedia/Whats_App_hover.svg')`}}
                
                >
                </div>
            ) : (
                <div 
                className={styles.vk}
                style={{backgroundImage: `url('/assets/socialMedia/WhatsApp.svg')`}}
                
                >
                </div>
            )}
            {mobile ? (
                <div 
                className={styles.vkMobile}
                style={{backgroundImage: `url('/assets/socialMedia/Telegram_hover.svg')`}}
                
                >
                </div>
            ) : (
                <div 
                className={styles.vk}
                style={{backgroundImage: `url('/assets/socialMedia/Telegram.svg')`}}
                
                >
                </div>
            )}
            {/* <div 
                className={styles.vk}
                style={{backgroundImage: `url('/assets/socialMedia/WhatsApp.svg')`}}
                
            >

            </div>
            <div 
                className={styles.vk}
                style={{backgroundImage: `url('/assets/socialMedia/Telegram.svg')`}}
                
            >

            </div> */}
        </div>
    )
}