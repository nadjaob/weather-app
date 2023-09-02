// IMAGES
import manBeach from '../images/man-beach.png'
import manSki from '../images/man-on-ski.png'
import manHandsUp from '../images/man-hands-up.png'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// COMPONENTS
import ChangeLocation from './ChangeLocation'

export default function CurrentWeather( { temperature, time, weather, humidity, date, region }) {
  console.log('type of temperature ', typeof temperature)
  return (
    <>
      <Container>
        <Row>
          <Col md="3" className="weather-details-left">
            <h3>{region}</h3>
            <h3>{date}</h3>
            <h3>{time}</h3>
          </Col>
          <Col md="6">
            {temperature > 68 ?
              <div className='answer'>
                <p>YES!</p>
                <img src={manBeach} alt="Man on the beach waiting for forecast" />
                  
              </div>
              :
              <div className='answer'>
                <p>NO!</p>
                <img src={manSki} alt="Man on the beach waiting for forecast" />
              </div>}
          </Col>
          <Col md="3" className="weather-details-right">
            <h3>Temperature: {temperature}</h3>
            <h3>{weather}</h3>
            <h3>Humidity: {humidity }</h3>
          </Col>
        </Row>
      </Container>
    </>

  )
}



{/* <div className="weather-display">

<div className="region-date">
  <h3>{region}</h3>
  <h3>{date}</h3>
  <h3>{time}</h3>
</div>

<div className="weather-img">
  {console.log(temperature > 68)}
  {temperature > 68 ? 
    <div className='answer'>
      <p>YES</p>
      <img src={manBeach} alt="Man on the beach waiting for forecast" />
        
    </div>
    : 
    <div className='answer'>
      <p>NO</p>
      <img src={manSki} alt="Man on the beach waiting for forecast" />
    </div>}
</div> 
<div className="weather-details">
  <h3>Temperature: {temperature}</h3>
  <h3>{weather}</h3>
  <h3>Humidity: {humidity }</h3>
</div>

</div> */}