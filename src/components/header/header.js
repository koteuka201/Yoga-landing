import React, {useState} from 'react'
import {Logo} from './logo/logo.js'
import {Navlist} from './navlist/navlist.js'
import {Phone} from './phoneNumber/phone.js'
import {BurgerIcon} from './burger/burger.js'
import { BurgerNavlist } from './burger/burgerNavList.js'
import styles from './header.module.scss'

export const Header = () => {

    const[isOpen, setIsOpen]=useState(false)

    const handleBurger=()=>{
        setIsOpen(!isOpen)
    }
    
    return (
        <header className={styles.container}>
            
            <Logo />
            <Navlist />
            <div className={styles.rightSide}> 
                <Phone />
                <BurgerIcon handleBurger={handleBurger}/>
                {isOpen &&
                    <BurgerNavlist />
                }
                
            </div>
        </header>
    )
}
