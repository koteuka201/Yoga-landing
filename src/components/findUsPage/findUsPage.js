import styles from './findUsPage.module.scss'
import { MainSection } from './mainSection/mainSection'

export const FindUsPage=()=>{
    return(
        <div id='contacts' className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <div className={styles.h1}>
                        Нас можно найти 
                    </div>
                </div>
            </div>
            <MainSection/>
        </div>
    )
}