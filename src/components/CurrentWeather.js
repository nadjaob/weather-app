export default function CurrentWeather() {
  return (
    <div className="weather-display">
      <div className="region-date">
        <h3>region</h3>
        <h3>date</h3>
      </div>
      <div className="weather-img">
        <img src="#" alt="weather image" />
      </div>
      <div className="weather-details">
        <h3>temperature</h3>
        <h3>weather</h3>
        <h3>humidity</h3>
      </div>
    </div>
  )
}