import manBeach from '../images/man-beach.png'
import manSki from '../images/man-on-ski.png'
import manHandsUp from '../images/man-hands-up.png'

export default function CurrentWeather( { temperature, time, weather, humidity, date, region }) {
  console.log('type of temperature ', typeof temperature)
  return (
    <div className="weather-display">
      <div className="region-date">
        <h3>{region}</h3>
        <h3>{date}</h3>
        <h3>{time}</h3>
      </div>
      <div className="weather-img">
        {console.log(temperature > 68)}
        {temperature > 68 ? 
          <div className='answer'>
            <h1>No. </h1>
            <img src={manBeach} alt="Man on the beach waiting for forecast" />
          </div>
          : 
          <div className='answer'>
            <h1>Yes! </h1>
            <img src={manSki} alt="Man on the beach waiting for forecast" />
          </div>}
      </div> 
      
      <div className="weather-details">
        <h3>Temperature: {temperature}</h3>
        <h3>{weather}</h3>
        <h3>Humidity: {humidity }</h3>
      </div>
    </div>
  )
}