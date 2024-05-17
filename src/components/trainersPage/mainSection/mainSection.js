import React, {useState, useEffect} from "react";
import styles from './mainSection.module.scss'
import { MainImg } from "./imageContent/mainImg";
import { SideImg } from "./imageContent/sideImg";
import { ProgressBar } from "../../shared/progressBar/progressBar";
import { NextBtn } from "../../shared/switchBtn/nextBtn";
import { PrevBtn } from "../../shared/switchBtn/prevBtn";
import { getTrainers } from "../../../services/service";

export const MainSection=()=>{
    
    const images=[
        '/assets/trainers/trainer-1.jpg',
        '/assets/trainers/trainer-2.jpg',
        '/assets/trainers/trainer-3.jpg',
        '/assets/trainers/trainer-4.jpg'
    ]

    const [data,setData]=useState('')
    const [currentIndex, setCurrentIndex]=useState(0)

    useEffect( ()=>{
        getData()
    },[])

    async function getData(){
        const response= await getTrainers()
        setData(response)
    } 

    const handleNextItem=()=>{
        const newIndex=(currentIndex+1)%4
        setCurrentIndex(newIndex)
    }

    const handlePrevItem=()=>{
        const newIndex=(currentIndex+3)%4
        setCurrentIndex(newIndex)
    }

    return(
        
        <div className={styles.container}>
            {data &&
                <>
                    <div className={styles.imgContainer}>
                        <MainImg src={images[currentIndex]}/>
                    </div>
                    
                    <div className={styles.infoContainer}>
                        <div className={styles.nameContainer}>
                            <div className={styles.name}>
                                {data[currentIndex].name}
                            </div>
                        </div>
                        <div className={styles.descContainer}>
                            <div className={styles.desc}>
                                {data[currentIndex].text}
                            </div> 
                        </div>
                    </div>
                    
                    
                    <div className={styles.sideImgContainer}>
                        <div style={{cursor: "pointer"}} onClick={()=> setCurrentIndex((currentIndex+1)%4)}>
                            <SideImg src={images[(currentIndex+1)%4]}/>
                            <div className={styles.sideImg}>
                                {data[(currentIndex+1)%4].name}
                            </div>
                        </div>
                        <div style={{cursor: "pointer"}} onClick={()=> setCurrentIndex((currentIndex+2)%4)}>
                            <SideImg src={images[(currentIndex+2)%4]}/>
                            <div className={styles.sideImg}>
                                {data[(currentIndex+2)%4].name}
                            </div>
                        </div>
                    </div>
                    <div className={styles.barWrapper}>
                        <div className={styles.barContainer}>
                            <div className={styles.prevBtnContainer}>
                                <PrevBtn goToPrevSlide={handlePrevItem}/>
                            </div>
                            <div className={styles.nextBtnContainer}>
                                <NextBtn goToNextSlide={handleNextItem}/>
                            </div>
                            <div className={styles.progressBarContainer}>
                                <ProgressBar currentIndex={currentIndex} images={4}/>
                            </div>
                            
                        </div>
                    </div>
                </>
            }
        </div>
    )
}