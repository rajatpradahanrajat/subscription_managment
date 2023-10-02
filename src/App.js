import React, {useContext,useEffect, useState } from "react";
import Form from "./Form";
import Banner from "./Banner";
import FilterBanner from "./FilterBanner";
import Charts from "./Charts";
// import Test from "./test";
import Pops from "./Popup";
import './Popup.css'
// import { Chart } from "chart.js";


function App () {
  let Arr = [];
  let [globalArr, setGlobalArr] = useState([]);
  let [selectedYear, setSelectedYear] = useState();

 

  console.log();
  console.log("global", globalArr);
  const filteredDataBasedOnYear = globalArr.filter(detail => {
    const date = new Date(detail.date)
    console.log(detail);
    if(date.getFullYear() === +selectedYear){
      return detail
    } else if(selectedYear==='all'){
      return detail
    }

  })


  // console.log(globalArr)
  // console.log(filteredDataBasedOnYear)
  return (
    <div>
      <Form setGlobalArr={setGlobalArr} />
      <FilterBanner setSelectedYear={setSelectedYear}/>
      <Charts globalArr={filteredDataBasedOnYear}/>
      <Banner filteredDataBasedOnYear={filteredDataBasedOnYear}  />
      
      {/* <Test /> */}
    </div>
  );
};
export default App;