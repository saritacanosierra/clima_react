const fetchForecast = async (city) =>{
    const APIKEY = '41adcf96efc6be8d625818449aa40aa0'
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&units=metric`
    const response = await fetch(url)
    const forecast = await response.json()
    return forecast
  }

export default fetchForecast

