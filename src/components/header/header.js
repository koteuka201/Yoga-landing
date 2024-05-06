import {Logo} from './logo/logo.js'
import { Navlist } from './navlist/navlist.js'
import { Phone } from './phoneNumber/phone.js'
import styles from './header.module.scss'
export const Header=()=>{
    return(
        <header className={styles.container}>
            <Logo/>
            <Navlist/>
            <Phone/>
        </header>
    )
}