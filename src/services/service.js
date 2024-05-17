import axios from "axios";

export const getReferral= async ()=>{

    const response = await axios.get('http://localhost:3001/referral')

    return response.data
}
export const getPrices= async ()=>{

    const response = await axios.get('http://localhost:3001/prices')

    return response.data
}

export const getSchedule= async ()=>{

    const response = await axios.get('http://localhost:3001/schedule')

    return response.data
}

export const getTrainers= async ()=>{

    const response = await axios.get('http://localhost:3001/trainers')

    return response.data
}

export const getReviews= async ()=>{

    const response = await axios.get('http://localhost:3001/reviews')

    return response.data
}