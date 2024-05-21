import React from "react";
import ReactDOM from 'react-dom';
import styles from './modal.module.scss'

export const Modal = ({ isOpen, onClose, direction, time }) => {
    if (!isOpen) return null;
    
    const placeholder=`${direction} (${time})`
    return ReactDOM.createPortal(
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.closeBtnModule}>
                <button className={styles.closeBtn} onClick={onClose}>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 16L15.9999 1M16 16L1.00006 1" stroke="#98958B" stroke-linecap="round"/>
                </svg>
            </button>
            </div>
            <div className={styles.h1Module}>
                <div className={styles.h1}>
                    Записаться на тренировку
                </div>
            </div>
            <form className={styles.formModule}>
                <input className={styles.dir} type="text" placeholder="Направление" value={placeholder} disabled />
                <input className={styles.phone} type="number" placeholder="Номер телефона"/>
                <input className={styles.comment} type="text" placeholder="Комментарий"/>
            </form>
            <div className={styles.btnModule}>
                <button className={styles.btn}>
                    ОТПРАВИТЬ
                </button>
            </div>
            <div className={styles.policyModule}>
                <input style={{width: '16px', height: '16px', alignSelf: 'center', cursor: 'pointer'}} type="checkbox" />
                <span className={styles.policy}>принимаю условия политики конфиденциальности</span>
            </div>
        </div>
      </div>,
      document.getElementById('portal')
    );
  };