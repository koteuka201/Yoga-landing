import axios from "axios";

export const getReferral= async ()=>{

    const response = await axios.get('http://localhost:3001/referral')

    return response.data
}
export const getPrices= async ()=>{

    const response = await axios.get('http://localhost:3001/prices')

    return response.data
}