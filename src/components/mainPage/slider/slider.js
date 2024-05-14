import React, { useState } from 'react';
import styles from './slider.module.scss'
import { NextBtn } from '../../shared/switchBtn/nextBtn';
import { PrevBtn } from '../../shared/switchBtn/prevBtn';
import { Slide } from './slideFun'
import { ProgressBar } from '../../shared/progressBar/progressBar';
export const Slider=()=>{

    const images = [
        
        '/assets/slider/slider-1.svg',
        '/assets/slider/slider-2.svg',
        '/assets/slider/slider-3.svg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const newIndex = (currentIndex + 1) % 3;
        setCurrentIndex(newIndex);
    };

    const goToPrevSlide = () => {
        const newIndex = (currentIndex - 1 + 3) % 3;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={styles.container }>
            <div>
                <Slide src={images[currentIndex]} />
            </div>
            <div className={styles.switchContainer}>
                <div className={styles.indexContainer}>
                    {currentIndex+1}/3
                </div>
                <ProgressBar currentIndex={currentIndex} images={images.length}/>
                <div className={styles.switchers}>
                    <PrevBtn goToPrevSlide={goToPrevSlide}/>
                    <NextBtn goToNextSlide={goToNextSlide}/>
                </div>
                
                
            </div>            
        </div>
    )
}