import React,{useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import styles from './modal.module.scss'


export const Modal = ({ isOpen, onClose, direction, time }) => {

    const {register, handleSubmit, reset, formState: {errors}}=useForm()
    const [isSubmit,setIsSubmit]=useState(false)

    useEffect(() => {
        if (!isOpen) {
            setIsSubmit(false)
            reset();
        }
    }, [isOpen, reset]);

    if (!isOpen) return null

    const placeholder=`${direction} (${time})`

    const onSubmit=()=>{
        setIsSubmit(true)
    }

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
            {isSubmit ? (
                <>
                    <div className={styles.h1CompleteModule}>
                        <div className={styles.h1}>
                            спасибо! <br/>
                            ваша заявка принята
                        </div>
                    </div>
                    <div className={styles.p1Module}>
                        <div className={styles.p1}>
                            Наш менеджер свяжется с вами в ближайшее время!
                        </div>
                    </div>
                    <div
                        className={styles.flower}
                        style={{backgroundImage: `url('/assets/flowers/modalFlower.svg')`}}
                    >

                    </div>
                </>
            ) : (    
                    <>
                
                        <div className={styles.h1Module}>
                            <div className={styles.h1}>
                                Записаться на тренировку
                            </div>
                        </div>
                        <form className={styles.formModule} onSubmit={handleSubmit(onSubmit)}>
                            <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
                                <input className={styles.dir} type="text" placeholder="Направление" value={placeholder} disabled />
                                <input 
                                    className={styles.phone} 
                                    type="tel" 
                                    placeholder="Номер телефона"
                                    {...register('phone',{
                                        required: 'Номер телефона обязателен',
                                        pattern:{
                                            value: /^\+7\d{10}$/,
                                            message: 'Используйте формат номера телефона: +7xxxxxxxxxx'
                                        }
                                    })}
                                />
                                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                                <input className={styles.comment} type="text" placeholder="Комментарий"/>
                            </div>
                            <button type="submit" className={styles.btn}>
                                ОТПРАВИТЬ
                            </button>
                            <div className={styles.policyModule}>
                                <input 
                                    className={styles.checkbox}
                                    type="checkbox"
                                    {...register('policy',{
                                        required: 'Вы должны принять условия пол'
                                    })}
                                />
                                <span className={!errors.policy ? styles.policy : styles.policyError}>принимаю условия политики конфиденциальности</span>
                            </div>
                        </form>
                    </>
                )
            }
        </div>
      </div>,
      document.getElementById('portal')
    );
  };