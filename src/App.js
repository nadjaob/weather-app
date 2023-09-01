import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import ChangeLocation from './components/ChangeLocation'
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

const App = () => {

  const key = 'TW5ET69J7J5FLRR28PWGD76GT'

  const [ region, setRegion ] = useState()
  const [ weather, setWeather ] = useState()
  const [ time, setTime ] = useState()

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/London,UK?key=${key}`) // * <-- replace with your endpoint
      console.log(data)
      setWeather(data.currentConditions.conditions)
      setRegion(data.address)
    }
    getData()
  }, [])

  return (
    <main>
      <h1> Is It Time for Long Pants? </h1>
      <SetRegion></SetRegion>
      <CurrentWeather></CurrentWeather>
      <ChangeLocation></ChangeLocation>
    </main>

  )
}

export default App
