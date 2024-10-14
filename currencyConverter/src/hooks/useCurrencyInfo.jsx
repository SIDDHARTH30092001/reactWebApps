import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})

    //call when lifecycle triggers, auto fetches
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>{ return res.json()}) //.then gives call back (res)
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])//dependecy array, when i call usd to inr lets say ill call currency
    console.log(data);
    return data
}


export default useCurrencyInfo;

//custom hook is designed

//url for api - let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
