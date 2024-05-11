import React from 'react';
import styles from './burger.module.scss'
export const BurgerIcon = ({handleBurger}) => {
  return (
    <div className={styles.burgerIcon} onClick={handleBurger} >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}