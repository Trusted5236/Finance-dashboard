import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
export const ThemeContext = createContext()
export const ThemeProvider = ({children}) => {

    const [light, setLight] = useState(() => localStorage.getItem("light") === "true");

    useEffect(() => {
        if (light) {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            document.body.style.backgroundColor = '#343a40';
            document.body.style.color = 'white';
        }
    }, [light]);

    const handleToggle = () => {
        setLight((prevLight) => {
            const newLight = !prevLight;
            localStorage.setItem('light', newLight);
            return newLight;
        });
    };
  return (
    
//returning the ThemeContext.Provider with the value of light and handleToggle
    <div>
      <ThemeContext.Provider value={{ light, handleToggle }}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContext
