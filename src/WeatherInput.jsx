import { useContext, useEffect } from "react"
import { useState } from "react"
import WeatherMap from "./WeatherMap"
import { MyContext } from "./App";
import { Link } from "react-router-dom";

const WeatherInput = () => {
    const { city,searchVal, setSearchVal} = useContext(MyContext);
    // let [city,setCity]=useState(null)
    // const [searchVal,setSearchVal]=useState("")
    // console.log(searchVal)
    // console.log("city",city)


    // useEffect(()=>{
    //     fetchData()
    // },[searchVal])

    // const fetchData=async()=>{
    //     let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=d519434cae900ae9d596764e4a09d3ce`)
    //     let json=await data.json()
    //     console.log(json)
    //     setCity(json)

    // }
    
  return (
    <div>
        <div >
        <h2>Weather App</h2>
            <input type="text" placeholder="Enter City Name" 
            // value={city} 
            onChange={(e)=>setSearchVal(e.target.value)} />
        </div>
        <button><Link to={"/map"}>search</Link></button>
        {/* <WeatherMap city={city} val={searchVal}/> */}


       
       
    </div>
  )
}

export default WeatherInput