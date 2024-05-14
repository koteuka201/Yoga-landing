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
                <div className={styles.infoContainer}>
                    <div className={styles.title}>
                        {data[currentIndex].title}
                    </div>
                    <div className={styles.time}>
                        <div className={styles.flex}>
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 2V5" stroke="#98958B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 2V5" stroke="#98958B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 9.08984H20.5" stroke="#98958B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.9998 3.5L20.9998 22.2L2.99976 22L3.0457 3.5H20.9998Z" stroke="#98958B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 17H12.1965" stroke="#98958B" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M17 17H17.1965" stroke="#98958B" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M17 13H17.1965" stroke="#98958B" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M7 17H7.19648" stroke="#98958B" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M12 13H12.1965" stroke="#98958B" stroke-linecap="square" stroke-linejoin="round"/>
                                <path d="M7 13H7.19648" stroke="#98958B" stroke-linecap="square" stroke-linejoin="round"/>
                            </svg>
                            
                            <div className={styles.ml}>
                                Проходит по: {data[currentIndex].days}
                            </div>
                            
                        </div>
                        <div className={styles.flex}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.3563 13.8021C21.3563 18.8333 17.3217 22.9167 12.3506 22.9167C7.3795 22.9167 3.34497 18.8333 3.34497 13.8021C3.34497 8.77083 7.3795 4.6875 12.3506 4.6875C17.3217 4.6875 21.3563 8.77083 21.3563 13.8021Z" stroke="#98958B" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3506 8.33337V13.5417" stroke="#98958B" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.26294 2.08337H15.4382" stroke="#98958B" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className={styles.ml}>
                                Длительность: {data[currentIndex].time}
                            </div>
                        </div>
                    </div>
                    <div className={styles.description}>
                        {data[currentIndex].text}
                    </div>
                    
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