import React from 'react';
import styles from './slider.module.scss'

export const Slide = ({ src  }) => {
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