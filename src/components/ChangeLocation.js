export default function ChangeLocation( { temperature } ){

  function updateLocation() {

  }
  
  return (
    <>
      {temperature > 68 ?
        <div className="change-location">
          <button className="btn btn-outline-dark button-styling" onClick={updateLocation}>Take me to the sun!</button>
        </div>
        :
        <div></div>
      }
    </>
  )
}