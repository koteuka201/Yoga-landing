import React from 'react'
import styles from './trainersPage.module.scss'
import { MainSection } from './mainSection/mainSection'
export const TrainersPage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <div className={styles.h1}>
                        эксперты в области тела и разума
                    </div>
                </div>
                <div className={styles.p1Module}>
                    <div className={styles.p1}>
                        Наши инструктора сочетают свои знания и опыт, чтобы создать эффективные и интересные занятия, которые помогут вам укрепить мышечный корсет,  достичь гибкости, улучшить осанку и физическую форму. 
                    </div>
                </div>
            </div>
            <MainSection/>
        </div>
    )
}