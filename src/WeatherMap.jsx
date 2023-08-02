import { useContext } from "react";
import { MyContext } from "./App";


const WeatherMap = () => {
    const { city,searchVal, setSearchVal} = useContext(MyContext);

  return (
    <div>
           {!city? <p>No data Found</p>:
            <div>
        <div style={{border:"1px solid black",marginTop:"10px"}}>
            <h2>Weather App</h2>
            <div>
                <img src="" alt="" />
                <h3>13c</h3>
                <h4>Broken Cloud</h4>
                <h4>{searchVal}</h4>
                <p>{city?.main?.temp}</p>
            </div>
            <div>
                <h4>tem 13c</h4>
                <h4>tem 84%</h4>

            </div>
            </div>
        </div>
            }
    </div>
  )
}

export default WeatherMap
