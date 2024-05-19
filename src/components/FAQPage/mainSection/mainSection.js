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
                <img className={styles.img} src="/assets/faq/faq-1.jpg" alt="faqImg" />
            </div>
        </div>
    )
}