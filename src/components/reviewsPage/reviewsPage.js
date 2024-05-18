import styles from './reviewsPage.module.scss'
import { Reviews } from './reviews/reviews'

export const ReviewsPage=()=>{
    
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <div className={styles.h1}>
                        наши довольные клиенты
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.btn}>ОСТАВИТЬ ОТЗЫВ</button>
                </div>
            </div>
            <Reviews/>
            <div className={styles.btnMobile}>
                <button className={styles.btn}>ОСТАВИТЬ ОТЗЫВ</button>
            </div>
        </div>
    )
}