import { Route, Routes } from "react-router-dom"
import WeatherInput from "../WeatherInput"
import WeatherMap from "../WeatherMap"
// import Ab from "../Ab"


const AllRoute = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<WeatherInput />}/>
        <Route path="/map" element={<WeatherMap/>} />
        {/* <Route path="/map" element={<Ab/>}/> */}
       
     
      </Routes>
    </div>
  )
}

export default AllRoute