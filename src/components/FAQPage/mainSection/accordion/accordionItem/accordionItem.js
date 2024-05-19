import React from 'react';
import styles from './accordionItem.module.scss'
import { PlusBtn } from '../signBtn/Plus.js';
import { MinusBtn } from '../signBtn/minus.js';
export const AccordionItem = ({ index, activeIndex, handleToggle, title, content }) => {
    const isActive = activeIndex === index;

    return (
        <div className={styles.accordionItem}>
            <div className={styles.accordionHeader} onClick={() => handleToggle(index)}>
                <div className={styles.btn}>
                    {isActive ? <MinusBtn /> : <PlusBtn />}
                </div>
                
                <h2 className={isActive ? styles.activeTitle : styles.title}>{title}</h2>
            </div>
            <div className={`${styles.accordionContent} ${isActive ? styles.show : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};