import React, { useState } from 'react'

const WeatherCard = ({weather, temp}) => {

  const [isCelsius, setCelsius] = useState(true)

  const handleChangeTemp = () => {

  }


  return (
    <article>
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2>
      <div>
       <div> 
          <img 
          src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
       </div>
       <section>
        <h3> '{weather?.weather[0].description}'</h3>
        <ul>
            <li><span>Wind Speed</span><span>{weather?.wind.speed} m/s</span></li>
            <li><span>Clouds</span><span>{weather?.clouds.all} %</span></li>
            <li><span>Pressure</span><span>{weather?.main.pressure} hpa</span></li>
        </ul>
       </section>
      </div>
      <h2>{isCelsius ? `${temp?.celsius} ºC` : `${temp?.farenheit} ºF`}</h2>
      <button>Chang to ºF</button>
    </article>
  )
}

export default WeatherCard