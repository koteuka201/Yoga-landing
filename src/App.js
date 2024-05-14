import './index.scss'
import {Header} from './components/header/header'
import { MainPage } from './components/mainPage/mainPage'
import { ReferralPage } from './components/referralPage/referralPage'

export default function App(){
    return(
        <main className='wrapConteiner'>
            <Header/>
            <MainPage/>
            <ReferralPage/>
        </main>
    )
}