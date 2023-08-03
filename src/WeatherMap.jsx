import { useContext } from "react";
import { MyContext } from "./App";
import NotFound from "./NotFound";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CiLocationOn,  } from "react-icons/ci";
import { WiHumidity  } from "react-icons/wi";



import "./style/weatherMap.css";



const WeatherMap = () => {
  const { city,currLoc,trueVal,setTrueVal } = useContext(MyContext);
  let navigate = useNavigate();

//   console.log("curr",currLoc)
//   console.log("city",city)


  let home = () => {
    navigate("/");
    setTrueVal(false)
  };

 
  
  return (
    <>
{(!trueVal) ?

    <div>
    {city?.message  == "city not found" ? (
 
          <NotFound />
    
) : (
      <div id="mainInputt">
        <div>
          <div className="check">
            <div
              className="insideDiv"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: "10px",
              }}
            >
              <AiOutlineArrowLeft
                style={{ cursor: "pointer",color:"#42ADFD" }}
                onClick={() => home()}
              />
              <h2 style={{ color:"#42ADFD"}}>Weather App</h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{width:"40%"}} src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="" />
              {/* <img
                style={{ width: "50%" }}
                src={`http://openweathermap.org/img/wn/${city?.weather[0]?.icon}@2x.png`}
                alt=""
              /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom:"10px"
                }}
              >
                <h1>{(city?.main?.temp - 273).toFixed()}°C</h1>
                <h4>{city?.weather[0]?.description}</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {/* <IoLocationOutline/> */}
                  <CiLocationOn />
                  <h4>{city?.name}</h4>
                </div>
              </div>
            </div>

            {/* middle */}

            <hr />

            {/* sec */}
            <div className="lastDiv">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
  
                <img
                  style={{ width: "30px" }}
                  src="https://www.svgrepo.com/download/179594/thermometer-temperature.svg"
                  alt=""
                />
                {/* <CiTempHigh/> */}
    
                <div>
                  <h3>{(city?.main?.feels_like - 273).toFixed()}°C</h3>
                  <p>feels_like</p>
                </div>
              </div>

              <div className="middle">
                <div className="middle1"></div>
                <div className="middle2"></div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  paddingBottom:"10px"

                }}
              >
                <div className="humi">
                  {/* <WiHumidity style={{color:"#42ADFD",width:"10px",height:"20px"}}/> */}
                  <img
                    style={{ width: "25px",color:"blue" }}
                    src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>{city?.main?.humidity}%</h3>
                  <p>humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>

   :

   <div>
    {currLoc?.message  == "wrong latitude" ? (
 

          <NotFound />
    
) : (
      <div id="mainInputt">
        <div>
          <div className="check">
            <div
              className="insideDiv"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                gap: "10px",
              }}
            >
              <AiOutlineArrowLeft
                style={{ cursor: "pointer",color:'#42ADFD' }}
                onClick={() => home()}
              />
              <h2 style={{ color: "#42ADFD" }}>Weather App</h2>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img style={{width:"40%"}} src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png" alt="" />
              {/* <img
                style={{ width: "50%" }}
                src={`http://openweathermap.org/img/wn/${currLoc?.weather[0]?.icon}@2x.png`}
                alt=""
              /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom:"10px"

                }}
              >
                <h1>{(currLoc?.main?.temp - 273).toFixed()}°C</h1>
                <h4>{currLoc?.weather[0]?.description}</h4>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  {/* <IoLocationOutline/> */}
                  <CiLocationOn />
                  <h4>{currLoc?.name}</h4>
                </div>
              </div>
            </div>

            {/* middle */}

            <hr />

            {/* sec */}
            <div className="lastDiv">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                }}
              >
  
                <img
                  style={{ width: "30px" }}
                  src="https://www.svgrepo.com/download/179594/thermometer-temperature.svg"
                  alt=""
                />
                {/* <CiTempHigh/> */}
    
                <div>
                  <h3>{(currLoc?.main?.feels_like - 273).toFixed()}°C</h3>
                  <p>feels_like</p>
                </div>
              </div>

              <div className="middle">
                <div className="middle1"></div>
                <div className="middle2"></div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  paddingBottom:"10px"

                }}
              >
                <div className="humi">
                  {/* <WiHumidity style={{color:"#42ADFD",width:"10px",height:"20px"}}/> */}
                  <img
                    style={{ width: "25px",color:"blue" }}
                    src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                    alt=""
                  />
                </div>
                <div>
                  <h3>{currLoc?.main?.humidity}%</h3>
                  <p>humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
   
   }
   </>
  );

  
};

export default WeatherMap;


