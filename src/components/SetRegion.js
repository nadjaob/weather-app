import { useState, useEffect } from 'react'

export default function SetRegion ({ setRegion, setForecastDate, forecastDate }){

  const [ newInput, setNewInput ] = useState('')
  const [ newDateInput, setNewDateInput ] = useState(0)

  function updateInput(e) {
    setNewInput(e.target.value)
  }

  function updateDate(e) {
    setNewDateInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setRegion(newInput)
    setForecastDate(newDateInput)
    setNewInput('')
    setNewDateInput(0)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="set-region">
        <label hidden htmlFor="region">Region</label>
        <input className="form-control" type="text" placeholder="Your city..." name="region" value={newInput} onChange={updateInput} />
        <label hidden htmlFor="date">Date</label>
        <select className="form-select" name="date" id="" value={newDateInput} onChange={updateDate}>
          <option value="0">Today</option>
          <option value="1">Tomorrow</option>
          <option value="3">In 3 days</option>
          <option value="7">In 7 days</option>
        </select>
        <button className="btn btn-outline-dark button-styling">Search</button>
      </form>
    </div>
  )
}