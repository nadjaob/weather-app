import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import ChangeLocation from './components/ChangeLocation'
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

//Key

const App = () => {

  const [ region, setRegion ] = useState()
  const [ date, setDate ] = useState()
  const [ time, setTime ] = useState()

  const [ weather, setWeather ] = useState()
  const [ temperature, setTemperature ] = useState()
  const [ humidity, setHumidity ] = useState()

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const getData = async () => {
      const { data } = await axios.get(`/vancouver?key=${key}`) // * <-- replace with your endpoint
      console.log(data)
      console.log(data.currentConditions.conditions)

      setRegion(data.resolvedAddress)
      setDate(data.days[0].datetime)
      setTime(data.currentConditions.datetime)

      setWeather(data.currentConditions.conditions)
      setTemperature(data.currentConditions.temp)
      setHumidity(data.currentConditions.humidity)
    }
    getData()
  }, [])

  console.log(weather)

  return (
    <main>
      <h1>Is It Time for The Beach?</h1>
      <SetRegion />
      <CurrentWeather
        region= { region }
        date = { date }
        time = { time }
        temperature={ temperature}
        weather= { weather }
        humidity = { humidity }
      />
    </main>
  )
}

export default App
