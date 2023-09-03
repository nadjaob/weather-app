import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

//Key

const App = () => {

  const [ region, setRegion ] = useState()
  const [ fullRegion, setFullRegion ] = useState()

  const [ date, setDate ] = useState()
  const [ forecastDate, setForecastDate ] = useState(0)

  const [ time, setTime ] = useState()

  const [ weather, setWeather ] = useState()
  const [ temperature, setTemperature ] = useState()
  const [ humidity, setHumidity ] = useState()

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const getData = async () => {
      try {
        const { data } = await axios.get(`/${region}}?key=${key}`) // * <-- replace with your endpoint
        console.log(data)
        console.log(data.currentConditions.conditions)

        setFullRegion(data.resolvedAddress)
        setDate(data.days[forecastDate].datetime)
        setTime(data.currentConditions.datetime)

        setWeather(data.currentConditions.conditions)
        setTemperature(data.currentConditions.temp)
        setHumidity(data.currentConditions.humidity)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [region, forecastDate])

  console.log(weather)

  return (
    <main>
      <h1>Is It Time for Long Pants?</h1>
      <SetRegion
        setRegion={setRegion}
        setForecastDate={setForecastDate}
        forecastDate={forecastDate}
      />
      <CurrentWeather
        setRegion={setRegion}
        fullRegion={fullRegion}
        date={date}
        time={time}
        temperature={temperature}
        weather={weather}
        humidity={humidity}
      />
    </main>
  )
}

export default App
