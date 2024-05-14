import React from "react";
import styles from './refButton.module.scss'
export const RefButton=({name, func, currentIndex})=>{

    const indexMap = {
        'Кундалини-йога': 0,
        'Хатха-йога': 1,
        'Пилатес': 2,
        'Здоровая спина': 3,
        'Флоу-йога': 4,
        'Стретчинг': 5
    };

    return(
        <button className={indexMap[name]===currentIndex ? styles.btnClicked : styles.container } onClick={func}>
            {name}
        </button>
    )
}