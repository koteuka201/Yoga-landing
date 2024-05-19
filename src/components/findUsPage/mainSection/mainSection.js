import styles from './mainSection.module.scss'
import { Fields } from './fields/fields'
import { Map } from './map/map'

export const MainSection=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.fieldModule}>
                <Fields/>
            </div>
            <div className={styles.mapModule}>
                <Map/>
            </div>
        </div>
    )
}