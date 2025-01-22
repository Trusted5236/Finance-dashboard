import { createContext } from "react"
import StockApi from "../Componets/StockApi"
import { useQuery } from "@tanstack/react-query"
import Stockhead from "../Componets/Stockhead"

export const stockContext = createContext()

export default function Stock(){

    const { data : stocks = [], isLoading, error} = useQuery({
        queryFn : () => fetch(``).then((res)=>{return res.json()}),
    
        queryKey: ["posts"]
      })
    

    return(
       
           <stockContext.Provider value={{stocks, isLoading, error}}>
                <Stockhead/>
            <StockApi/>
           </stockContext.Provider>
        
    )
}