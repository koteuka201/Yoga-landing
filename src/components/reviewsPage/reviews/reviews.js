import React,{useState, useEffect} from 'react'
import styles from './reviews.module.scss'
import { MainReviewCard } from './reviewsCard/mainReviewCard/mainReviewCard'
import { SideReviewCard } from './reviewsCard/sideReviewCard/sideReviewCard'
import { getReviews } from '../../../services/service'
import { NextBtn } from '../../shared/switchBtn/nextBtn'
import { PrevBtn } from '../../shared/switchBtn/prevBtn'
import { ProgressBar } from '../../shared/progressBar/progressBar'

export const Reviews=()=>{

    const images=[
        '/assets/reviews/body-1.svg',
        '/assets/reviews/body-2.svg',
        '/assets/reviews/body-3.svg',
        '/assets/reviews/body-4.svg',
        '/assets/reviews/body-5.svg'
    ]

    const [currentIndex, setCurrentIndex]=useState(0)
    const [data, setData]=useState('')


    useEffect( ()=>{
        getData()
    },[])

    async function getData(){
        const response= await getReviews()
    
        setData(response)
    } 

    const handleNextItem=()=>{
        const newIndex=(currentIndex+1)%5
        setCurrentIndex(newIndex)
    }

    const handlePrevItem=()=>{
        const newIndex=(currentIndex+4)%5
        setCurrentIndex(newIndex)
    }

    return(
        <div className={styles.container}>
            {data &&
                <>
                    <div className={styles.mainRevContainer}>
                        <MainReviewCard name={data[currentIndex].name} text={data[currentIndex].text}  date={data[currentIndex].date} img={images[currentIndex]}/>
                    </div>
                    <div className={styles.sideRevContainer}>
                        <SideReviewCard 
                            name={data[(currentIndex+1)%5].name} 
                            text={data[(currentIndex+1)%5].text}  
                            date={data[(currentIndex+1)%5].date} 
                            img={images[(currentIndex+1)%5]} 
                            more={()=>setCurrentIndex((currentIndex+1)%5)}/>
                        <SideReviewCard 
                            name={data[(currentIndex+2)%5].name} 
                            text={data[(currentIndex+2)%5].text}  
                            date={data[(currentIndex+2)%5].date} 
                            img={images[(currentIndex+2)%5]}
                            more={()=>setCurrentIndex((currentIndex+2)%5)}/>
                    </div>
                    <div className={styles.barContainer}>
                        <div className={styles.prevBtnContainer}>
                            <PrevBtn goToPrevSlide={handlePrevItem}/>
                        </div>
                        <div className={styles.nextBtnContainer}>
                            <NextBtn goToNextSlide={handleNextItem}/>
                        </div>
                        <div className={styles.progressBarContainer}>
                            <ProgressBar currentIndex={currentIndex} images={5}/>
                        </div>
                    </div>  
                </>
            }
        </div>
    )
}