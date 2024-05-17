import styles from './sideReviewCard.module.scss'

export const SideReviewCard=({name, text, date, img, more})=>{
    const trimText = (text) => {
        const words = text.split(' ');
        if (words.length > 30) {
            return words.slice(0, 30).join(' ') + '...';
        }
        return text;
    }
    return(
        <div className={styles.card}>
            <div className={styles.cutout}>
                
            </div>
            {/* <div 
                className={styles.cutoutImg}
                style={{ backgroundImage: `url(${img})` }}>
            </div> */}
            <div className={styles.content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.line}></div>
                <div className={styles.text}>{trimText(text)}</div>
                
            </div>
            <div className={styles.footer}>
                <div onClick={more} className={styles.more}>Подробней</div>
                <div className={styles.date}>{date}</div>
            </div>
        </div>
    )
}