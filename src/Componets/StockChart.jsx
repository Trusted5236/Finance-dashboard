import React, { useEffect } from 'react'
import Chart from "react-google-charts"
import { useState } from 'react'


const StockChart = ({fetchedData}) => {
    const [data, setData] = useState([["Date", "Price"]])

//useEffect to update the data when the fetchedData changes
    useEffect(() => {
        let dataCopy = [["Date", "Price"]]
        
        if(fetchedData.data){
            fetchedData.data.map((stock) => {
                let date = new Date(stock.timestamp)
                dataCopy.push([date.toLocaleDateString(), parseFloat(stock.close)])
            })
        }   

        setData(dataCopy)
        console.log(data)
    }, [fetchedData])

//returning the LineChart with the data
  return (
    <div>
        <Chart
        chartType='LineChart'
        data={data}
        height={'100%'}
        legendToggle
        />
    </div>
  )
}

export default StockChart