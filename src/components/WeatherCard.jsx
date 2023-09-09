import React, { useState, useEffect } from 'react';


const WeatherCard = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const [backgImage, setBackgImage] = useState(null); // Estado para la imagen de fondo

  useEffect(() => {
    if (weather && weather.weather && weather.weather[0] && weather.weather[0].description) {
      const weatherDescription = weather.weather[0].description.toLowerCase(); // Obtener descripción del clima

      // Determinar dinámicamente la imagen de fondo según la condición climática
      let imageFileName = 'default.webp'; // Imagen de fondo predeterminada

      /*En el Switch pusimos True eso hace que cheque que el case sea true y sino va al siguente 
      en este caso tiene que ver con el WeatherDescription que incluya lo que tu pones en cada caseS */

      switch (true) {
        case weatherDescription.includes('clear'):
          imageFileName = 'clear.webp';
          break;
        case weatherDescription.includes('clouds'):
          imageFileName = 'clouds.webp'; // Nombre de archivo de imagen para clima nublado
          break;
        case weatherDescription.includes('rain'):
          imageFileName = 'rain.webp'; // Nombre de archivo de imagen para clima lluvioso
          break;
        // Agrega más casos según sea necesario para otras condiciones climáticas
        default:
          break;
      }

      // Establecer la imagen de fondo en el estado
      const backgroundImageUrl = `./nubes/${imageFileName}`;
      setBackgImage(`url("${backgroundImageUrl}")`);
    }
  }, [weather]);

  
/*Seteamos el estilo que obtuvimos para poder agregar la URl correctamente */
  const estiloBACK = {
    backgroundImage: backgImage,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

   const handleChangeTemp = () => {
    if (isCelsius) {
      setIsCelsius(false)
    } else { setIsCelsius(true)}

  }


  return (
    <article style={estiloBACK}>
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
      <button onClick={handleChangeTemp}>Chang to ºF</button>
    </article>
  )
}

export default WeatherCard