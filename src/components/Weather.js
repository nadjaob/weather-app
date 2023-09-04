//import all icons
function importAll(r) {
  const images = {}
  r.keys().map((item, index) => { 
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const images = importAll(require.context('../images/weather-icons', false, /\.(png)$/))


export default function Weather( { icon, weather } ){

  return (
    <div className="weather">
      <h3>{weather}</h3>
      <img src={images[`${icon}.png`]} alt={icon} />
    </div>
  )
}