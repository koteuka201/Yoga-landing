import React,{useState,useEffect} from "react";
import styles from './mainSection.module.scss'
import { RefButton } from "./refButton/refButton";
import { getReferral } from "../../../services/service";
import { SliderRef } from "./slider/sliderRef";
import { ProgressBar } from "../../shared/progressBar/progressBar";
import { NextBtn } from "../../shared/switchBtn/nextBtn";
import { PrevBtn } from "../../shared/switchBtn/prevBtn";

export const MainSection=()=>{

    const [data,setData]=useState('')
    const [currentIndex, setCurrentIndex]=useState(0)

    useEffect( ()=>{
        getData()
    },[])
    

    const handleClick=(index)=>{
        setCurrentIndex(index)
        // console.log(data[currentIndex])
    }

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % 6;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + 6) % 6;
        setCurrentIndex(newIndex);
    };

    async function getData(){
        const response= await getReferral()
        setData(response)
    } 
    
    return(
        <div className={styles.mainContainer}>
            <div className={styles.btnContainer}>
                <RefButton name={'Кундалини-йога'} func={()=>handleClick(0)} currentIndex={currentIndex} />
                <RefButton name={'Хатха-йога'} func={()=>handleClick(1)} currentIndex={currentIndex}/>
                <RefButton name={'Пилатес'} func={()=>handleClick(2)} currentIndex={currentIndex}/>
                <RefButton name={'Здоровая спина'} func={()=>handleClick(3)} currentIndex={currentIndex}/>
                <RefButton name={'Флоу-йога'} func={()=>handleClick(4)} currentIndex={currentIndex}/>
                <RefButton name={'Стретчинг'} func={()=>handleClick(5)} currentIndex={currentIndex}/>
            </div>
            <div className={styles.imgContainer}>
                <SliderRef index={currentIndex}/>
            </div>
            {data &&
            <> 
                
                <div className={styles.title}>
                    {data[currentIndex].title}
                </div>
                <div className={styles.time}>
                    <div className={styles.schedule}>
                        
                        <img className={styles.imgStyle} src="/assets/referralPic/calendar.svg" alt="calendar" />
                        
                        <div className={styles.ml}>
                            Проходит по: {data[currentIndex].days}
                        </div>
                        
                    </div>
                    <div className={styles.duration}>
                        <img className={styles.imgStyle} src="/assets/referralPic/timer.svg" alt="timer" />
                        <div className={styles.ml}>
                            Длительность: {data[currentIndex].time}
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    {data[currentIndex].text}
                </div>
                    
                <div className={styles.barContainer}>
                    <div className={styles.switchContainer}>
                        <PrevBtn goToPrevSlide={goToPrevSlide}/>
                        <NextBtn goToNextSlide={goToNextSlide}/>
                    </div>
                    <ProgressBar currentIndex={currentIndex} images={6} />
                </div>
            </>
            }
        </div>
    )
    
}