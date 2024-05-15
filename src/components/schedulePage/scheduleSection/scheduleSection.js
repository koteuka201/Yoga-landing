import React,{useState, useEffect} from "react";
import styles from './scheduleSection.module.scss'

export const ScheduleSection=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.schModule}>
                <div className={styles.flex}>
                    <div>
                        Понедельник
                    </div>
                    <div>
                        Вторник
                    </div>
                    <div>
                        Среда
                    </div>
                    <div>
                        Четверг
                    </div>
                    <div>
                        Пятница
                    </div>
                    <div>
                        Суббота
                    </div>
                </div>
                
            </div>
        </div>
    )
}