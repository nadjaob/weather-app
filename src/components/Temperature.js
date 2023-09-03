export default function Temperature( { temp, tempScale, changeScale }) {


  return (
    <div className="temparature">   
      <h3>Temperature {temp}&deg;{tempScale}</h3>
      <button className={'btn btn-outline-dark button-styling'} onClick={changeScale}>&deg;{tempScale === 'F' ? 'C' : 'F'}</button>
    </div>
  )

}