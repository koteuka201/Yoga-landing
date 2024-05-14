import React from 'react';
import styles from './sliderRef.module.scss'

export const ToSlide = ({ src  }) => {
    
    return (
        
        <div
        className={styles.slider}
        style={{
            backgroundImage: `url(${src})`
        }}
        >

        </div>
        
    );
};