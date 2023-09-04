import { useState, useEffect } from 'react'

export default function SetRegion ({ setRegion, setForecastDate, resetInputs, newInput, setNewInput, newDateInput, setNewDateInput }){

  // const [ newInput, setNewInput ] = useState('')
  // const [ newDateInput, setNewDateInput ] = useState(0)

  function updateInput(e) {
    setNewInput(e.target.value)
  }
  function updateDate(e){
    setNewDateInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setRegion(newInput)
    setForecastDate(newDateInput)
  }

  // function resetInputs() {
  //   setNewInput('')
  //   setNewDateInput(0)
  // }

  return (
    <div>
      <form onSubmit={handleSubmit} className="set-region">
        <label hidden htmlFor="region">Region</label>
        <input className="form-control" type="text" placeholder="Your city..." name="region" value={newInput} onClick={resetInputs} onChange={updateInput} />
        <label hidden htmlFor="date">Date</label>
        <select className="form-select" name="date" id="" value={newDateInput} onChange={updateDate}>
          <option value="0">Today</option>
          <option value="1">Tomorrow</option>
          <option value="3">In 2 days</option>
          <option value="4">In 3 days</option>
          <option value="5">In 4 days</option>
          <option value="6">In 5 days</option>
          <option value="7">In 6 days</option>
          <option value="8">In 7 days</option>
          <option value="9">In 8 days</option>
          <option value="10">In 9 days</option>
          <option value="11">In 10 days</option>
          <option value="12">In 11 days</option>
          <option value="13">In 12 days</option>
          <option value="14">In 13 days</option>
          <option value="15">In 14 days</option>
        </select>
        <button className="btn btn-outline-dark button-styling">Search</button>
      </form>
    </div>
  )
}