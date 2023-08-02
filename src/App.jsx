
import './App.css'
import WeatherInput from './WeatherInput'
import { createContext, useEffect, useState } from 'react';
import AllRoute from './routes/AllRoute';

export const MyContext = createContext("");

function App() {
  let [city,setCity]=useState(null)
  const [searchVal,setSearchVal]=useState("")
  console.log(searchVal)
  console.log("city",city)


  useEffect(()=>{
      fetchData()
  },[searchVal])

  const fetchData=async()=>{
      let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=d519434cae900ae9d596764e4a09d3ce`)
      let json=await data.json()
      console.log(json)
      setCity(json)

  }

  return (
    <>
       <MyContext.Provider value={{ city, setCity,searchVal,setSearchVal }}>
   

      {/* <WeatherInput/> */}
      <AllRoute/>
    </MyContext.Provider>
    </>
  )
}

export default App
