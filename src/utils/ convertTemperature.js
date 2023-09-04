export function fahrenheitToCelcius(fahrenheit){
  console.log('FAHRENHEIT ', fahrenheit)
  return Math.round((fahrenheit - 32) * (5 / 9) * 100 ) / 100
}

export function celciusToFahrenheit(celcius) {
  console.log('CELCIUS ', celcius)
  return Math.round((celcius * (9 / 5 ) + 32) * 100) / 100
}
