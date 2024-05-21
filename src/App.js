import './index.scss'
import {Header} from './components/header/header'
import { MainPage } from './components/mainPage/mainPage'
import { ReferralPage } from './components/referralPage/referralPage'
import { PricePage } from './components/pricePage/pricePage'
import { SchedulePage } from './components/schedulePage/schedulePage'
import { TrainersPage } from './components/trainersPage/trainersPage'
import { ReviewsPage } from './components/reviewsPage/reviewsPage'
import { FAQPage } from './components/FAQPage/FAQPage'
import { FindUsPage } from './components/findUsPage/findUsPage'
import { Footer } from './components/footer/footer'

export default function App(){
    return(
        <main className='wrapConteiner'>
            <Header/>
            <MainPage/>
            <ReferralPage/>
            <PricePage/>
            <SchedulePage/>
            <TrainersPage/>
            <ReviewsPage/>
            <FAQPage/>
            <FindUsPage/>
            <Footer/>
        </main>
    )
}