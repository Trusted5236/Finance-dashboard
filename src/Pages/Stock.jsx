import { createContext } from "react"
import StockApi from "../Componets/StockApi"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Stockhead from "../Componets/Stockhead"

export const stockContext = createContext()

export default function Stock(){
    const [symbol, setSymbol] = useState(["MSFT", "AAPL", "IBM"])
    const API_KEY = "FE5BNUTUZJ2GX9DB"

    const { data : stocks = {}, isLoading, error} = useQuery({
        queryFn : () => fetch(`https://www.alphavantage.co/query?function=REALTIME_BULK_QUOTES&symbol=${symbol.join(",")}&apikey=demo`).then((res)=>{return res.json()}),
    
        queryKey: ["stocks", symbol]
      })
    console.log(stocks)
  
    

    return(
       
           <stockContext.Provider value={{stocks, isLoading, error}}>
                <Stockhead/>
                <StockApi/>
           </stockContext.Provider>
        
    )
}