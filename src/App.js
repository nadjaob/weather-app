import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

const App = () => {

  const [ region, setRegion ] = useState('')
  const [ fullRegion, setFullRegion ] = useState()
  const [ date, setDate ] = useState()

  const [ forecastDate, setForecastDate ] = useState()

  const [ weather, setWeather ] = useState()
  const [ icon, setIcon ] = useState()

  const [ temperature, setTemperature ] = useState()
  const [ tempScale, setTempScale ] = useState('F')
  const [ humidity, setHumidity ] = useState()

  const [ showError, setShowError ] = useState()

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const getData = async () => {
      try {
        const { data } = await axios.get(`/${region}/?key=${key}`) 
        console.log('data', data)
    
        setFullRegion(data.resolvedAddress)
        setDate(data.days[forecastDate].datetime)
        console.log('date', date)

        setWeather(data.days[forecastDate].conditions)
        setIcon(data.days[forecastDate].icon)

        setTemperature(data.days[forecastDate].temp)
        setTempScale('F')
        setHumidity(data.days[forecastDate].humidity)

      
        
      } catch (error) {
        console.log(error)
        console.log('put error image')
        // setTemperature('errorTemp')
        // setShowError(true)
        // console.log(`nadjs error ${showError}`)
      }
    }
    getData()
  }, [region, forecastDate])

  // useEffect(() => {
  //   setShowError(false)
  // }, [])

  return (
    <main>
      <h1>Can I Wear Short Pants?</h1>
      <SetRegion
        setRegion={setRegion}
        setForecastDate={setForecastDate}
        date={date}
        setDate={setDate}
      />
      <CurrentWeather
        setRegion={setRegion}
        fullRegion={fullRegion}
        date={date}
        setTemperature={setTemperature}
        temperature={temperature}
        setTempScale={setTempScale}
        tempScale={tempScale}
        weather={weather}
        humidity={humidity}
        icon={icon}
        // setShowError={setShowError}
      />
    </main>
  )
}

export default App
