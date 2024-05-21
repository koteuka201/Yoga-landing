import styles from './footer.module.scss'
import { NavlistFooter } from './navlistFooter/navlistFooter'
import { SocialBlock } from '../shared/socialMedia/social'
import { LogoFooter } from './logo/logo'

export const Footer=()=>{
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactModule}>
                    <div className={styles.contact}>
                        <div >
                            Адрес: г. Томск, Варшавское шоссе 26
                        </div>
                        <div className={styles.mt}>
                            Тел: +7 (924) 444-77-77
                        </div>
                        <div className={styles.mt}>
                            Email: balans@maiil.ru
                        </div>
                    </div>
                </div>
                <div className={styles.navModule}>
                    <NavlistFooter/>
                </div>
                <div className={styles.socialModule}>
                    <SocialBlock/>
                </div>
                <div className={styles.agreementModule}>
                    <div className={styles.agreement}>
                        Согласие на обработку персональных данных
                    </div>
                </div>
                <div className={styles.logoModule}>
                    <LogoFooter/>
                </div>
                <div className={styles.policyModule}>
                    <div className={styles.policy}>
                        Политика конфиденциальности
                    </div>
                </div>
            </div>
        </footer>
    )
}