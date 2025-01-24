import React from 'react'
import { useContext } from 'react'
import { stockContext } from '../Pages/Stock'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import StockChart from './StockChart';

const Stockhead = () => {
  
    const [input, setInput] = useState('')
    const [searchedStock, setSearchedStock] = useState([])
    const {stocks, isLoading, error} = useContext(stockContext) 
    const [currency, setCurrency] = useState("$")
   console.log(stocks)
    if (isLoading) return <p>Loading...</p>;

    const handleChange = (e) => {
      setInput(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      const stocks = stocks.data.filter((stock) => {
        return stock.symbol.toLowerCase().includes(input.toLowerCase())
      })

      setSearchedStock(stocks)
    }

    
    const stocksToDisplay = searchedStock.length > 0 ? searchedStock : stocks.data
  return (
    <div>

      
      <div className='flex flex-col items-center justify-center gap-y-[0.85rem] pb-[2rem]'>
            <h1 className='text-[2rem] font-bold text-center'>Largest<br /><span className='text-green-600'>Stock</span> Marketplace</h1>
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

        {/* <datalist id='coinList'>{posts.map((item, index)=>(<option key={index} value={item.name}/>))}</datalist>
         */}
    </form>

    <div className='flex flex-row items-center gap-x-[1rem]'>
            <select 
            name="currency" 
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className='flex flex-row items-center border-[0.1rem] rounded-[1rem] mb-[2.5rem] py-[0.5rem] px-[1rem] w-[100%] justify-center outline-none'>
              <option value="$">USD</option>
              <option value="£">EUR</option>
              <option value="€">GBP</option>
            </select>
          </div>
</div>

        <div className='flex flex-row items-center justify-between gap-x-[1rem] p-[1rem] bg-[#F5F5F5] w-[100%] py-[1rem] px-[2rem] border-b-[0.1rem]'>
            <p>#</p>
            <p>Symbol</p>
            <p>Price</p>
            <p>Change</p>
            <p>Volume</p>
        </div>
          
          

        <div>
            {stocksToDisplay.map((item, index)=>(
            <NavLink to={`/stockdata/${item.symbol}`} state={{currency}} key={index} className='flex flex-row items-center justify-between gap-x-[1rem] p-[1rem] w-[100%] py-[1rem] px-[2rem] border-b-[0.1rem]'>
                <p>{index+1}</p>
                <p>{item.symbol}</p>
                <p>{currency}{currency === "£" ? (item.close * 0.96).toFixed(2) : ""  || currency === "$" ? (item.close * 1).toFixed(2) : "" || currency === "€" ? (item.close * 0.81).toFixed(2) : ""}</p>
                <p className={item.change < 0 ? "text-red-600" : "text-green-600"}>{item.change}</p>
                <p>{item.volume}</p>
            </NavLink>
        ))}
        
        </div>

    </div>
  )
}

export default Stockhead
