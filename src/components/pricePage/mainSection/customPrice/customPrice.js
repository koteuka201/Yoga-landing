import styles from './customPrice.module.scss'

export const CustomPrice=({totalCount, priceTotal, priceOne, textTop, noLim, right})=>{
    return(
        <div className={right ? styles.mainContainer2 : styles.mainContainer} >
            <div style={{borderBottom: '1px solid rgba(152, 149, 139, 0.5)'}}>
                <div className={styles.flexTop}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <div className={styles.trainingTop}>{totalCount}</div> 
                        {noLim===true ? (
                            <span className={styles.textTop2}>{textTop}</span>
                        ) : (
                            <span className={styles.textTop}>{textTop}</span>
                        )}
                        
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <span className={styles.costTop}>{priceTotal}</span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.flexBottom}>
                    <div style={{display: 'flex', alignItems: 'end'}}>
                        <div className={styles.trainingBottom}>1</div> 
                        <span className={styles.textBottom}>Занятие</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {noLim===true ? (
                            <span className={styles.textBottom2}>{priceOne}</span>
                        ) : (
                            <span className={styles.costTop}>{priceOne}</span>
                        )}
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}