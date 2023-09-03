import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

//Key

const App = () => {

  const [ region, setRegion ] = useState('')
  const [ fullRegion, setFullRegion ] = useState()

  const [ date, setDate ] = useState()
  const [ forecastDate, setForecastDate ] = useState()

  const [ time, setTime ] = useState()

  const [ weather, setWeather ] = useState()
  const [ icon, setIcon ] = useState()

  const [ temperature, setTemperature ] = useState()
  const [ tempScale, setTempScale ] = useState('F')
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
        setIcon(data.currentConditions.icon)
        console.log('icon', icon)

        setTemperature(data.currentConditions.temp)
        setTempScale('F')
        setHumidity(data.currentConditions.humidity)
      
        
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [region, forecastDate])

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
