import React from 'react'
import { useParams  } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import StockChart from '../Componets/StockChart'
import { useState } from 'react'



const StockData = () => {
    
    const location = useLocation()
    const [symbols, setSymbols] = useState(["MSFT", "AAPL", "IBM"])
    const { symbol } = useParams()
    const currency = location.state.currency
    console.log(currency)

    //Fetching data for the stock
    const { data : stocks = {}, isLoading, error} = useQuery({
        queryFn : () => fetch(`https://www.alphavantage.co/query?function=REALTIME_BULK_QUOTES&symbol=${symbols.join(",")}&apikey=demo`).then((res)=>{return res.json()}),
    
        queryKey: ["stocks", symbol]
      })

      if (isLoading) return <p>Loading...</p>;

  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-y-[0.85rem] pt-[2rem]'>   
            <h1 className='text-[1.5rem] font-bold'>{symbol}</h1>
        </div>

        <div  className='w-full h-auto flex items-center justify-center flex-col overflow-hidden'>
        <StockChart fetchedData={stocks}/> 
        </div>


        <div className='w-full h-auto flex items-center justify-center flex-col gap-y-[1rem] py-[2rem] font-bold'>
           { stocks.data.filter(stock => stock.symbol === symbol)  // 
          .map((stock, index) => (
            <div key={index}>
                <div>
                    <ul className='flex flex-row items-center justify-center md:gap-x-[17rem] gap-x-[12rem] border-b-[0.1rem]'>
                        <li>Price</li>
                        <li>{currency}{stock.close}</li>
                    </ul>


                    <ul className='flex flex-row items-center justify-center md:gap-x-[17rem] gap-x-[12rem] border-b-[0.1rem]'>
                        <li>Change</li>
                        <li>{stock.change}</li>                   
                    </ul>

                    <ul className='flex flex-row items-center justify-center md:gap-x-[17rem] gap-x-[10rem] border-b-[0.1rem]'>
                        <li>Volume</li>
                        <li>{stock.volume}</li>
                    </ul>

                   <ul className='flex flex-row items-center justify-center md:gap-x-[17rem] gap-x-[12rem] border-b-[0.1rem]'>
                          <li>High</li>
                          <li>{stock.high}</li>
                   </ul >
                   <ul className='flex flex-row items-center justify-center md:gap-x-[17rem] gap-x-[12rem] border-b-[0.1rem]'>
                            <li>Low</li>
                            <li>{stock.low}</li>
                   </ul>
                </div>
            </div>
          ))
      }
        </div>

      
    </div>
  )
}

export default StockData
