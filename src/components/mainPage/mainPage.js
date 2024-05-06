import styles from './mainPage.module.scss'

export const MainPage=()=>{
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1}>СТУДИЯ ЙОГИ И ПИЛАТЕСА</h1>
            </div>
            <div >
                <p className={styles.p}>Здесь мы поможем вам держать тело  в тонусе, а душу - в гармонии.</p>
            </div>
        </div>
    )
    
}