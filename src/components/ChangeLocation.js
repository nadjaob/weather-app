export default function ChangeLocation( { setRegion, setMustBeHotter } ){

  const hotPlaces = ['death valley', 'sahara', 'mojave', 'timbuktu', 'mitibrah', 'dash-te', 'sanorannp']

  function updateLocation() {
    const randomNumber = Math.floor(Math.random() * hotPlaces.length)
    setMustBeHotter(true)
    setRegion(hotPlaces[randomNumber])
  }

  return (
    <div className="change-location">
      <button className="btn btn-outline-dark button-styling" onClick={updateLocation}>TAKE ME TO THE SUN!</button>
    </div>
  )
}