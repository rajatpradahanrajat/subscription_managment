import React from 'react'

function DateBanner({date}) {
    const d= new Date(date);
    let monthName=d.toLocaleString('default',{month:'long'})


    let year=d.getFullYear()
    let date1=d.getDate()
    console.log(monthName,year,date1)
    
  return (
    <div>
      
      <h1>{date1}</h1>
      <h4>{monthName}</h4>
      <h4>{year}</h4>
    </div>
  )
}

export default DateBanner;
