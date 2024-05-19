import styles from './FAQPage.module.scss'
import { MainSection } from './mainSection/mainSection'

export const FAQPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <h1 className={styles.h1}>всегда на связи с клиентом</h1>
                </div>
            </div>
            <MainSection/>
        </div>
    )
}