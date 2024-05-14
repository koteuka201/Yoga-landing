import React,{useState} from "react";
import styles from './sliderRef.module.scss'
import { ToSlide } from "./toSlide";

export const SliderRef=({index})=>{
    
    const images=[
        '/assets/referralPic/fullPicture-1.jpg',
        '/assets/referralPic/fullPicture-2.jpg',
        '/assets/referralPic/fullPicture-3.jpg',
        '/assets/referralPic/fullPicture-4.jpg',
        '/assets/referralPic/fullPicture-5.jpg',
        '/assets/referralPic/fullPicture-6.jpg',
    ]
    return(
        <div>
            <ToSlide src={images[index]}/>
        </div>
    )
}