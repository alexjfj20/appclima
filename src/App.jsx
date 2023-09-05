
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import WeatherCard from './components/WeatherCard'

function App() {

 const [coords, setCoords] = useState()
 const [weather, setWeather] = useState()
 const [temp, setTemp] = useState()


 useEffect (() => {

  const sucess = posi =>{
    console.log(posi)

    const obj = {
     lat:posi.coords.latitude,
     lon: posi.coords.longitude

    }
      setCoords(obj)
  }
  navigator.geolocation.getCurrentPosition(sucess)
}, [])

 useEffect(() => {
     if(coords) {
       const APIkey = '50a0dc41aa46da82e5ca3c81a2c1eb82'
       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIkey}` 
        axios.get(url)
        .then(res => {
          setWeather(res.data)

          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 +32).toFixed(1)
          }
          setTemp(obj)
        })
        
      .catch(err => console.log(err)) 
     }
    
}, [coords]) // que se ejecute cuando tenga coords informacion

   console.log(weather)
 
  return (
    <div> < WeatherCard weather = {weather} temp={temp}
    
    />
            
    </div>
  )
}

export default App
