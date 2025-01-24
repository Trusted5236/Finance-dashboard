import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Crypto from "./Pages/Crypto"
import News from "./Pages/News"
import Stock from "./Pages/Stock"
import Coin from "./Pages/Coin"
import StockData from "./Pages/StockData"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Crypto />} />
      <Route path="/" element={<Crypto />} />
      <Route path="stock" element={<Stock />} />
      <Route path="/coin/:coinId" element={<Coin />} />
      <Route path="stockdata/:symbol" element={<StockData/>} />
      <Route path="news" element={<News />} />



    </Route>
  ))

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
