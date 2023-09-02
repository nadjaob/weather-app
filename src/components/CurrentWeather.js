// IMAGES
import manBeach from '../images/man-beach.png'
import manSki from '../images/man-on-ski.png'
import manHandsUp from '../images/man-hands-up.png'

export default function CurrentWeather( { temperature, time, weather, humidity, date, region }) {
  console.log('weather ', weather)
  return (
    <>
      <div className="weather-display">
        <div className="region-date">
          <h3>{region}</h3>
          <h3>{date}</h3>
          <h3>{time}</h3>
        </div>
        <div className="weather-img">
          <img src={manBeach} alt="Man on the beach waiting for forecast" />
        </div>
        <div className="weather-details">
          <h3>Temperature: {temperature}</h3>
          <h3>{weather}</h3>
          <h3>Humidity: {humidity }</h3>
        </div>
        <div className="answer-text">
          <p>YES</p>
        </div>
      </div>
      
    </>
  )
}