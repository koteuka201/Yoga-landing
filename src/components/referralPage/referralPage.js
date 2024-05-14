import styles from './referralPage.module.scss'
import { MainSection } from './mainSection/mainSection'
export const ReferralPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <h1 className={styles.h1}>все направления в одном абонементе</h1>
                </div>
                <div className={styles.pModule}>
                    <p className={styles.p}>Не определились с направлением? Мы подскажем!</p>
                </div>
            </div>
            <MainSection/>
            
        </div>
        
    )
    
}