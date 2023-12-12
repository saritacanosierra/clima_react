import React from 'react'

const CardsForecast = ({forecast}) => {
  return (
    <>
        {forecast && (
            <>
              <h2>Forecast</h2>
              <div className='container'>
                
                <div className='card'>
                  {forecast.list.slice(0,8).map((item,index)=>(
                    <div key={index} className="iner">
                      <h3 className='temperatura' >{item.dt_txt}</h3>
                      
                      <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/></p>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(8,16).map((item,index)=>(
                    <div key={index} className="iner">
                      <h3 className='temperatura' >{item.dt_txt}</h3>
                  
                      <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/></p>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(16,24).map((item,index)=>(
                    <div key={index} className="iner">
                      <h3 className='temperatura'> {item.dt_txt} </h3>
                      
                      <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/></p>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(24,32).map((item,index)=>(
                    <div key={index} className="iner">
                      <h3 className='temperatura'> {item.dt_txt} </h3>
                      
                      <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/></p>
                      <h4>{item.main.temp}°C</h4>
                    </div>
                  ))}
                </div>
                <div className='card'>
                  {forecast.list.slice(32,40).map((item,index)=>(
                    <div key={index} className="iner">
                      <h3 className='temperatura'> {item.dt_txt} </h3>
                     
                      <p><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/></p>
                      <h4>{item.main.temp}°C</h4>
                </div>
                  ))}
                </div>
              </div>
            </>
          )}
    </>
  )
}

export default CardsForecast
