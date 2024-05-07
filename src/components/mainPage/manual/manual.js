import styles from './manual.module.scss'
import { Notation } from './notation/notation'
export const Manual=()=>{
    return(
        <div className={styles.container }>
            <img src="/assets/manual.svg" alt="manual" />
            <Notation/>
        </div>
    )
}