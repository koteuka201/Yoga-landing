import React from 'react'
import styles from './mainSection.module.scss'
import { Accordion } from './accordion/accordion'

export const MainSection=()=>{
    const src='/assets/faq/faq-1.png'
    return (
        <div className={styles.container}>
            <div className={styles.accordContainer}>
                <Accordion/>
            </div>
            
            <div className={styles.imgContainer}>
                <div 
                    className={styles.img}
                    style={{backgroundImage: `url('/assets/faq/faq-1.jpg')`}}
                >

                </div>
            </div>

        </div>
    )
}