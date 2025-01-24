import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Linechart from '../Componets/Linechart'
import { useLocation } from 'react-router-dom'


const Coin = () => {
    const {state} = useLocation()
    const currency = state.currency
    
    const { coinId } = useParams()

    const { data : coinData = [], isLoading, error} = useQuery({
        queryFn : () => fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`).then((res)=>{return res.json()}),
        
        queryKey: ["coinData", coinId]
    })

    const {data : chartData = [], isLoading: chartIsLoading, error: chartError} = useQuery({
        queryFn : () => fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=10&interval=daily`).then((res)=>{return res.json()}),
    
        queryKey: ["chartData"]
    })

    if (isLoading || chartIsLoading) return <p>Loading...</p>;
if (error || chartError) return <p>Error loading data</p>;

    
   
    

  return (
    <div>
        <div className='w-[100%] h-auto flex flex-col items-center justify-center gap-y-[1rem] pt-[2rem]'>
            <img src={coinData.image.large} className='w-[5rem]'/>
            <p className='text-[1.5rem] font-bold'>{`${coinData.name} (${coinData.symbol.toUpperCase()})`}</p>
        </div>

        <div className='w-full h-auto flex items-center justify-center flex-col'>    
            <Linechart fetchedData={chartData}/>
        </div>

        <div className='w-full h-auto flex items-center justify-center flex-col gap-y-[1rem] py-[2rem] font-bold text-slate-700'>

            <ul className='flex flex-row items-center justify-center gap-x-[17rem] border-b-[0.1rem]'>
                <li>Crypto Market Rank</li>
                <li>{coinData.market_cap_rank}</li>
            </ul>

            <ul className='flex flex-row items-center justify-center gap-x-[17rem] border-b-[0.1rem]'>
                <li>Current Price</li>
                <li>{`${currency === "usd" ? "$" : "" || currency === "eur"? "£" : "" || currency === "gbp"? "€" : ""}${coinData.market_data.current_price[currency]}`}</li>
            </ul>

            <ul className='flex gap-x-[15rem] border-b-[0.1rem]'>
                <li>Market cap</li>
                <li>{`${currency === "usd" ? "$" : "" || currency === "eur"? "£" : "" || currency === "gbp"? "€" : ""}${coinData.market_data.market_cap[currency]}`}</li>
            </ul>

            <ul className='flex flex-row items-center justify-center gap-x-[17rem] border-b-[0.1rem]'>
                <li>24 Hour High</li>
                <li>{`${currency === "usd" ? "$" : "" || currency === "eur"? "£" : "" || currency === "gbp"? "€" : ""}${coinData.market_data.high_24h[currency]}`}</li>
            </ul>

            <ul className='flex flex-row items-center justify-center gap-x-[17rem] border-b-[0.1rem]'>
                <li>24 Hour Low</li>
                <li>{`${currency === "usd" ? "$" : "" || currency === "eur"? "£" : "" || currency === "gbp"? "€" : ""}${coinData.market_data.low_24h[currency]}`}</li>
            </ul>


            
        </div>
    </div>
  )
}

export default Coin
