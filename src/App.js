import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

const App = () => {

  const [ region, setRegion ] = useState()
  const [ fullRegion, setFullRegion ] = useState()
  const [ date, setDate ] = useState(0)

  // const [ forecastDate, setForecastDate ] = useState()

  //! Suggestion: leave out time? 
  // const [ time, setTime ] = useState()
  const [ weather, setWeather ] = useState()
  const [ icon, setIcon ] = useState()

  const [ temperature, setTemperature ] = useState()
  const [ tempScale, setTempScale ] = useState('F')
  const [ humidity, setHumidity ] = useState()

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const getData = async () => {
      try {
        const { data } = await axios.get(`/${region}/?key=${key}`) 

        setFullRegion(data.resolvedAddress)
        setDate(data.days[date].datetime)
        console.log('data', data)
        console.log('date', date)

        //! Suggestion: leave out time? 
        // setTime(data.currentConditions.datetime)

        setWeather(data.days[date].conditions)
        setIcon(data.days[date].icon)

        setTemperature(data.days[date].temp)
        setTempScale('F')
        setHumidity(data.days[date].humidity)
      
        
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [region, date])

  return (
    <main>
      <h1>Can I Wear Short Pants?</h1>
      <SetRegion
        setRegion={setRegion}
        // setForecastDate={setForecastDate}
        // forecastDate={forecastDate}
        date={date}
        setDate={setDate}
      />
      <CurrentWeather
        setRegion={setRegion}
        fullRegion={fullRegion}
        date={date}
        //! Suggestion: leave out time? 
        // time={time}
        setTemperature={setTemperature}
        temperature={temperature}
        setTempScale={setTempScale}
        tempScale={tempScale}
        weather={weather}
        humidity={humidity}
        icon={icon}
      />
    </main>
  )
}

export default App
