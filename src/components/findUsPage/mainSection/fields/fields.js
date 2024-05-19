import styles from './fields.module.scss'
import { SocialBlock } from '../../../shared/socialMedia/social'
export const Fields=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.nameModule}>
                <input className={styles.name} type="text" placeholder='Имя'/>
            </div>
            <div className={styles.phoneModule}>
                <input className={styles.phone} type="number" placeholder='Номер телефона' />
            </div>
            <div className={styles.boxModule}>
                <input className={styles.checkBox} type="checkbox" />
                <div className={styles.box}>Принимаю условия политики конфиденциальности</div>
            </div>
            <div className={styles.btnModule}>
                <button className={styles.btn}>ОТПРАВИТЬ</button>
            </div>
            <div className={styles.socialModule}>
                <SocialBlock mobile={true}/>
            </div>
            <div className={styles.contactUsModule}>
                <div className={styles.contactUs}>
                    Свяжитесь с нами
                </div>
            </div>
        </div>
    )
}