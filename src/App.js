import './index.scss'
import {Header} from './components/header/header'
import { MainPage } from './components/mainPage/mainPage'
import { ReferralPage } from './components/referralPage/referralPage'
import { PricePage } from './components/pricePage/pricePage'
import { SchedulePage } from './components/schedulePage/schedulePage'
import { TrainersPage } from './components/trainersPage/trainersPage'

export default function App(){
    return(
        <main className='wrapConteiner'>
            <Header/>
            <MainPage/>
            <ReferralPage/>
            <PricePage/>
            <SchedulePage/>
            <TrainersPage/>
        </main>
    )
}