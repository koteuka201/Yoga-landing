import styles from './mainReviewCard.module.scss'

export const MainReviewCard=({name, text, date, img})=>{
    return(
        <div className={styles.container}>

        
            <div className={styles.card}>
                {/* <div className={styles.cutout}>
                    
                </div> */}
                <div 
                    className={styles.cutout}
                    style={{ backgroundImage: `url(${img})` }}>
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.line}></div>
                    <div className={styles.text}>{text}</div>
                    
                </div>
                <div className={styles.footer}>
                    <div className={styles.more}>Подробней</div>
                    <div className={styles.date}>{date}</div>
                </div>
                <div
                    className={styles.flower}
                    style={{backgroundImage: `url('/assets/flowers/reviewFlower.svg')`}}
                >

                </div>
            </div>
        </div>
    )
}