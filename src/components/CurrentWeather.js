// IMAGES
import manBeach from '../images/man-beach-sm.png'
import manSki from '../images/man-on-ski.png'
import manSmiles from '../images/man-smiles-sm.png'
import manCries from '../images/man-cries-sm.png'

// BOOTSTRAP
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// COMPONENTS
import ChangeLocation from './ChangeLocation'

export default function CurrentWeather( { temperature, time, weather, humidity, date, fullRegion, setRegion }) {
  console.log('type of temperature ', typeof temperature)
  return (
    <>
      <Container>
        <Row>
          <Col md="4" className="weather-details-left">
            <h3 className="text-end">{fullRegion}</h3>
            <h3>{date}</h3>
            <h3>{time}</h3>
          </Col>
          <Col md="4">
            <div className="answer">
              {!temperature ?
                <img src={manBeach} alt="Man on the beach waiting for forecast." />
                :
                <>
                  {temperature > 68 ?
                    <>
                      <p>NO!</p>
                      <img src={manSmiles} alt="Man smiles becuase it's beach weather." />
                      
                    </>
                    :
                    <>
                      <p>YES!</p>
                      <img src={manCries} alt="Man cries because it's no beach weather." />
                    </>
                  }
                </>
              }
              
            </div>
          </Col>
          <Col md="4" className="weather-details-right">
            {temperature ?
              <h3>Temperature: {temperature}&deg;F</h3>
              : <></>
            }
            <h3>{weather}</h3>
            {humidity ?
              <h3>Humidity: {humidity}%</h3>
              : <></>
            }
            {temperature <= 68 ?
              <ChangeLocation
                setRegion={setRegion}
              />
              :
              <div></div>
            }
          </Col>
        </Row>
      </Container>
    </>

  )
}