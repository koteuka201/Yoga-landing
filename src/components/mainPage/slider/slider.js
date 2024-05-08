import React, { useState } from 'react';
import styles from './slider.module.scss'
import { Slide } from './slideFun'

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
                
                <div className={styles.progressContainer}>
                    <div
                    className={styles.progressBar}
                    style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                    />
                </div>
                <img onClick={goToPrevSlide} style={{ marginRight: '8px',marginLeft: '26px' }} src="/assets/arrows/leftArrow.svg" alt="leftArrow" />
                <img onClick={goToNextSlide} src="/assets/arrows/rightArrow.svg" alt="rightArrow" />
            </div>            
        </div>
    )
}