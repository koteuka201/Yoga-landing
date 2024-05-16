import React,{useState, useEffect} from "react";
import styles from './scheduleSection.module.scss'
import { getSchedule } from "../../../services/service.js";
import { Schedule } from "./schedule/schedule.js";

export const ScheduleSection=()=>{

    const [data,setData]=useState('')
    const [currentIndex, setCurrentIndex]=useState(0)
    // const []

    useEffect( ()=>{
        getData()
    },[])

    async function getData(){
        const response= await getSchedule()
        setData(response)
    } 
    
    
    return(
        <div className={styles.container}>
            <div className={styles.schModule}>
                <div className={styles.flex}>
                    <div className={currentIndex===0 ? styles.isActive : styles.day} onClick={()=>setCurrentIndex(0)}>
                        Понедельник
                    </div>
                    <div className={currentIndex===1 ? styles.isActive : styles.day} onClick={()=>setCurrentIndex(1)}>
                        Вторник
                    </div>
                    <div className={currentIndex===2 ? styles.isActive : styles.day} onClick={()=>setCurrentIndex(2)}>
                        Среда
                    </div>
                    <div className={currentIndex===3 ? styles.isActive : styles.day} onClick={()=>setCurrentIndex(3)}>
                        Четверг
                    </div>
                    <div className={currentIndex===4 ? styles.isActive : styles.day} onClick={()=>setCurrentIndex(4)}>
                        Пятница
                    </div>
                    <div className={currentIndex===5 ? styles.isActive : styles.day} onClick={()=>setCurrentIndex(5)}>
                        Суббота
                    </div>
                </div>
                {data &&
                    <Schedule data={data[currentIndex]} index={currentIndex}/>
                }
                
            </div>
            <div className={styles.imgContainer}>
                <div
                    className={styles.img}
                    style={{
                        backgroundImage: `url(/assets/schedule/timeTable1.jpg)`
                    }}
                >
                </div>
            </div>
        </div>
    )
}