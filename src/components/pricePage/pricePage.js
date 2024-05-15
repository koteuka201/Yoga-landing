import React from 'react'
import styles from './pricePage.module.scss'
import { Prices } from './mainSection/prices'

export const PricePage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <h1 className={styles.h1}>
                        стоимость наших тренировок 
                    </h1>
                </div>
                <div className={styles.p1Module}>
                    <p className={styles.p1}>
                        После покупки абонемента его необходимо <span style={{fontWeight: '600'}}>активировать в течении трех месяцев</span> с момента приобретения (дата активации - первое занятие).
                    </p>
                </div>
                <div className={styles.p2Module}>
                    <p className={styles.p2}>
                        Первая тренировка для новых клиентов <span style={{fontWeight: '600'}}>бесплатная</span>
                    </p>
                </div>
                
            </div>
            <Prices/>
        </div>
    )
}