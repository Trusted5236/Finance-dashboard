import React from 'react'
import Search from '../Componets/Search'
import CryptoApi from '../Componets/CryptoApi'
import { createContext, useContext } from 'react'

const Crypto = () => {
  const cryptoContext = createContext()
  
  return (
    <div>
     <Search/>
     <CryptoApi/>
    </div>
  )
}

export default Crypto
