import React from "react";
import styles from './schedulePage.module.scss'
import { ScheduleSection } from "./scheduleSection/scheduleSection";
export const SchedulePage=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.headContainer}>
                <div className={styles.h1Module}>
                    <h1 className={styles.h1}>найдите свою практику в нашем расписании</h1>
                </div>
                <div className={styles.pModule}>
                    <p className={styles.p}>Приглашаем на первое пробное занятие <span style={{fontWeight: '600'}}>БЕСПЛАТНО!</span> Не упустите возможность попробовать что‑то новое и полезное для вашего здоровья!</p>
                </div>
            </div>
            <ScheduleSection/>
        </div>   
    )
}