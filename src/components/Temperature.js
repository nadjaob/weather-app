export default function Temperature( { temp, tempScale, changeScale }) {


  return (
    <>   
      <h3>Temperature: {temp}&deg;{tempScale}</h3>
      <button onClick={changeScale}>&deg;{tempScale === 'F' ? 'C' : 'F'}</button>
    </>
  )

}