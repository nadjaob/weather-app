export default function SetRegion (){

  function updateLocation(e) {
    const newLocation = e.target.value
  }

  function updateDate(e) {
    const daysLeft = e.target.value
    // setDate(data.days[daysLeft].datetime)
  }

  return (
    <div className="set-region">
      <input className="form-control" type="text" placeholder="Search city..." onChange={updateLocation} />
      <select className="form-select" name="date" id="" onChange={updateDate}>
        <option value="0">Today</option>
        <option value="1">Tomorrow</option>
        <option value="2">In 2 days</option>
        <option value="3">In 3 days</option>
        <option value="4">In 4 days</option>
        <option value="5">In 5 days</option>
        <option value="6">In 6 days</option>
        <option value="7">In 7 days</option>
      </select>
    </div>
  )
}