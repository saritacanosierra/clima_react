import { useState,useEffect } from 'react'
import './App.css'
import fetchWeather from './helpers/fetchWeather'
import fetchForecast from './helpers/fetchForecast'
import CardsWeather from './components/CardsWeather'
import CardsForecast from './components/CardsForecast'


function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const getWeather = () =>{
    fetchWeather(city)
    .then((data) => setWeather(data))
    .catch((error) => console.log(error))
  }

  const getForecast = () =>{
    fetchForecast(city)
    .then((data) => setForecast(data))
    .catch((error) => console.log(error))

  }
 
  useEffect(() => {
      if(city){
        getForecast()
      }
  }, [city])

  return (
    <div>
      <h1>CLIMA APP</h1>
      <div>
        <input 
          type="text" 
          placeholder="Enter city name"
          onBlur={(e) => setCity(e.target.value)}
        />
        <button className="button"
          onClick={getWeather}
        >
          BUSCAR
        </button>
        <CardsWeather weather={weather}/>
        <hr />
        <div>
          <CardsForecast forecast={forecast}/>
        </div>
      </div>
    </div>
  )
}
export default App
