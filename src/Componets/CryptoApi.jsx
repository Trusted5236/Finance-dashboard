import React, { useEffect } from 'react'
import { useQuery } from "@tanstack/react-query"
const API_URL = "TCG-MAWa7mLn69QVfrUoEN6yNtuq"
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import {NavLink} from "react-router-dom";


const CryptoApi = () => {
  const [input, setInput] = useState('')
  const [coins, setCoins] = useState([])
  const [currency, setCurrency] = useState('usd')


  //Fetching data for the coins
  const { data : posts = [], isLoading, error} = useQuery({
    queryFn : () => fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`).then((res)=>{return res.json()}),

    queryKey: ["posts"]
  })

 



  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const coins = posts.filter((post) => {
      return post.name.toLowerCase().includes(input.toLowerCase())
    })
    setCoins(coins)
  }

  const coinsToDisplay = coins.length > 0 ? coins : posts.slice(0, 10);

    
  return (

    //Displaying the fetched data
    <div>
     
         <div className='flex flex-col items-center justify-center gap-y-[2rem] w-[100%]'>

        <div className='flex flex-col items-center justify-center gap-y-[0.85rem]'>
            <h1 className='text-[2rem] font-bold text-center'>Largest <br /><span className='text-green-600'>Crypto</span> Marketplace</h1>
            <p className='text-slate-600 text-[1.1rem] text-center'>Welcome to your financial dashboard. Track your investments in <br />real-time and stay informed about market trends.</p>
        </div>


        <div className='flex flex-row items-center justify-between gap-x-[1rem] w-[100%]'>
          
        <form onSubmit={handleSubmit} className='flex flex-row items-center border-[0.1rem] rounded-[1rem] mb-[2.5rem] py-[0.5rem] px-[1rem] w-[50%] justify-center'>


              <input 
              type="search" 
              placeholder='Search assest' 
              onChange={handleChange}
              value={input}
              list='coinList'
              className='border-none outline-none w-full'/>
              <button type='submit' className='bg-[#F5F5F5]'><CiSearch/></button>

              <datalist id='coinList'>{posts.map((item, index)=>(<option key={index} value={item.name}/>))}</datalist>
              
          </form>
          
          <div className='flex flex-row items-center gap-x-[1rem]'>
            <select 
            name="currency" 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className='flex flex-row items-center border-[0.1rem] rounded-[1rem] mb-[2.5rem] py-[0.5rem] px-[1rem] w-[100%] justify-center outline-none'>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
            </select>
          </div>
        </div>
        </div>


      <div className='flex flex-row items-center justify-between gap-x-[1rem] p-[1rem] bg-[#F5F5F5] w-[100%] py-[1rem] px-[2rem] border-b-[0.1rem]'>
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p className='hidden md:flex'>24H Change</p>
            <p className='hidden md:flex'>Market Cap</p>

        </div>
        
        
          <div>{isLoading? <p>Loading...</p> : ""}</div>
        {coinsToDisplay.slice(0, 10).map((post, index) => (
          <NavLink to={`/coin/${post.id}`} state={{currency}} key={index} className='flex flex-row items-start justify-between gap-x-[1rem] p-[1rem] w-[100%] py-[1rem] px-[2rem] border-b-[0.1rem]'>

            <h1>{post.market_cap_rank}</h1>
            <div className='flex flex-row items-center gap-x-[0.5rem]'>
              <img src={post.image} className='w-[2rem]'/>
              <h1><span>{post.name}</span>-<span className='uppercase'>{post.symbol}</span></h1>
            </div>
            <h1>{`${currency === "usd" ? "$" : "" || currency === "eur" ? "£" : "" || currency === "gbp" ? "€" : ""}${post.current_price}`}</h1>
            <h1 className={post.price_change_percentage_24h < 0 ? "text-red-600 hidden md:flex" : "text-green-600 hidden md:flex"}>{post.price_change_percentage_24h}</h1>
            <h1 className='hidden md:flex'>{`${currency === "usd" ? "$" : "" || currency === "eur" ? "£" : "" || currency === "gbp" ? "€" : ""}${post.market_cap}`}</h1>
          </NavLink>

        ))}

    </div>
  )
}

export default CryptoApi
