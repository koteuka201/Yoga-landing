import './index.scss'
import {Header} from './components/header/header'
import { MainPage } from './components/mainPage/mainPage'

export default function App(){
    return(
        <main className='wrapConteiner'>
            <Header/>
            <MainPage/>
        </main>
    )
}