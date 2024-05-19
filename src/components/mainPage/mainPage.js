import styles from './mainPage.module.scss'
import { Slider } from './slider/slider'
import { CircleBtn } from './circleBtn/circleBtn'
import { Manual } from './manual/manual'

export const MainPage=()=>{
    return(
        <div id='main' className={styles.container}>
            <div className={styles.h1Module}>
                <h1 className={styles.h1}>студия йоги и пилатеса</h1>
            </div>
            <div className={styles.pModule}>
                <p className={styles.p}>Здесь мы поможем вам держать тело  в тонусе, а душу - в гармонии.</p>
            </div>
           <div className={styles.slider}>
                <Slider/>
           </div>
           <div className={styles.btnModule}>
                <CircleBtn/>
           </div>
           <div className={styles.manualModule}>
                <Manual/>
           </div>
        </div>
    )
    
}