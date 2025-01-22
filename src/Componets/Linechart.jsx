import React, { useEffect } from 'react'
import Chart from "react-google-charts"
import { useState } from 'react'

const Linechart = ({fetchedData}) => {
    const [data, setData] = useState([["Date", "Price"]])

    useEffect(() => {
        let dataCopy = [["Date", "Price"]]

        if(fetchedData.prices){
            fetchedData.prices.map((price) => {
                dataCopy.push([`${new Date(price[0]).toLocaleDateString()}`, price[1]])
            })
        }   
        setData(dataCopy)
    }, [fetchedData])


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

export default Linechart
