import { useState, useEffect } from 'react'
import axios from 'axios'


// COMPONENTS 
import CurrentWeather from './components/CurrentWeather'
import SetRegion from './components/SetRegion'

const App = () => {

  const [ region, setRegion ] = useState('')
  const [ mustBeHotter, setMustBeHotter] = useState(false)
  const [ fullRegion, setFullRegion ] = useState()
  const [ date, setDate ] = useState()

  const [ forecastDate, setForecastDate ] = useState()

  const [ weather, setWeather ] = useState()
  const [ icon, setIcon ] = useState()

  const [ temperature, setTemperature ] = useState()
  const [ tempScale, setTempScale ] = useState('F')
  const [ humidity, setHumidity ] = useState()

  function updateWebsite( apiResponse ){
    setFullRegion(apiResponse.resolvedAddress)
    setFullRegion(apiResponse.resolvedAddress)
    setDate(apiResponse.days[forecastDate].datetime)
    setWeather(apiResponse.days[forecastDate].conditions)
    setIcon(apiResponse.days[forecastDate].icon)
    setTemperature(apiResponse.days[forecastDate].temp)
    setTempScale('F')
    setHumidity(apiResponse.days[forecastDate].humidity)
  }
  

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY
    const getData = async () => {
      try {
        const { data } = await axios.get(`/${region}/?key=${key}`) 
        console.log('data', data)

        console.log(mustBeHotter)
        if (mustBeHotter === false ) {
          updateWebsite(data)
        } else {
          if (data.days[forecastDate].temp > 68){
            updateWebsite(data)
          }
          setMustBeHotter(false)
        }
      
        
      } catch (error) {
        console.log(error)
        console.log('put error image')
        //Set Temperature to "nonexistent"
      }
    }
    getData()
  }, [region, forecastDate])

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
        setMustBeHotter={setMustBeHotter}
      />
    </main>
  )
}

export default App
