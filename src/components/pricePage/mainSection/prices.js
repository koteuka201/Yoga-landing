import React,{useEffect,useState} from "react"
import styles from './prices.module.scss'
import { CustomPrice } from "./customPrice/customPrice"
import { getPrices } from "../../../services/service"
export const Prices=()=>{

    const [data,setData]=useState('')

    useEffect( ()=>{
        getData()
    },[])

    async function getData(){
        const response= await getPrices()
        setData(response)
    } 

    return(
        <div className={styles.container}>
            <div className={styles.oneContainer}>
                <div style={{borderBottom: '1px solid rgba(152, 149, 139, 0.5)'}}>
                    <div className={styles.costTop}>
                        800₽
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.trainingBottom}>
                        1
                    </div>
                    <div className={styles.textBottom}>
                        Занятие
                    </div>
                </div>
            </div>
            {data &&
                <>
                    <div className={styles.fourContainer}>
                        <div style={{display: 'flex', justifyItems: "end"}}>
                            <CustomPrice totalCount={data[0].count} priceTotal={data[0].price} priceOne={data[1].price} textTop={data[0].text} />
                        </div>
                        
                    </div>
                    <div className={styles.eightContainer}>
                        <CustomPrice totalCount={data[2].count} priceTotal={data[2].price} priceOne={data[3].price} textTop={data[2].text} right={true}/>
                    </div>
                    <div className={styles.twelveContainer}>
                        <CustomPrice totalCount={data[4].count} priceTotal={data[4].price} priceOne={data[5].price} textTop={data[4].text} />
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.btn}>Записаться</button>
                        
                    </div>
                    <div className={styles.noLimContainer}>
                        <CustomPrice totalCount={data[6].count} priceTotal={data[6].price} priceOne={data[7].price} textTop={data[6].text} noLim={true} right={true}/>
                    </div>
                    
                </>
            }
        </div>
    )
}