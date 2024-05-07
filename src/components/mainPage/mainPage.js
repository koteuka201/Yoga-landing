import styles from './mainPage.module.scss'
import { Slider } from './slider/slider'
export const MainPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.h1Module}>
                <h1 className={styles.h1}>СТУДИЯ ЙОГИ И ПИЛАТЕСА</h1>
            </div>
            <div className={styles.pModule}>
                <p className={styles.p}>Здесь мы поможем вам держать тело  в тонусе, а душу - в гармонии.</p>
            </div>
           <div className={styles.slider}>
                <Slider/>
           </div>
        </div>
    )
    
}