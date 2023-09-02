export default function ChangeLocation( { setRegion } ){

  const hotPlaces = ['death valley', 'sahara', 'mojave', 'atacama']

  function updateLocation() {
    const randomNumber = Math.floor(Math.random() * hotPlaces.length)
    setRegion(hotPlaces[randomNumber])
  }

  return (
    <div className="change-location">
      <button className="btn btn-outline-dark button-styling" onClick={updateLocation}>TAKE ME TO THE SUN!</button>
    </div>
  )
}