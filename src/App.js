import "./App.css";
import search_icon from "./Assets/search.png";
import clear from "./Assets/clear.png";
import cloud from "./Assets/cloud.png";
import drizzle from "./Assets/drizzle.png";
import snow from "./Assets/snow.png";
import wind from "./Assets/wind.png";
import rain from "./Assets/rain.png";
import humidity from "./Assets/humidity.png";
import { useState } from "react";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";
function App() {

 


  const api_key="fbe0cc607ab742e2b9d162929232909"
  const [temp,changetemp]=useState(0)
  const [city_name,changecity]=useState("City")
  const [humidity_value,changehumdity]=useState("O")
  const [wind_value,changewind]=useState("0")
  const [img,changeimg]=useState(clear)
  async function search(){
  const city=document.getElementById('city').value
  if(city===""){
    return 0
  }
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=f2b33e1c083ef693ccd9aa9176c5c617`
const response=  await fetch (url)
let data= await response.json()
const temp_v=data.main.temp
changetemp(temp_v)
changecity(data.name)
changehumdity(data.main.humidity)
changewind(data.wind.speed)
switch (data.weather.main) {
  case "clear":
    changeimg(clear)
    break;
  case "snow":
    changeimg(snow)
    break;
  case "rain":
    changeimg(rain)
    break;
  case "clouds":
      changeimg(cloud)
      break;
  case "drizzle":
        changeimg(drizzle)
        break;
  default:
    changeimg(cloud)
    break;
}
}
 
  return (
    <div className="App">
      <div className="search-section">
        <input type="text" className="city" id="city" placeholder="Search" />
        <div className="search-icon" onClick={search} >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-img">
        <img src={img} alt="" />
      </div>
      <div className="temp">
        <h1>
          {temp}<sup><small>o</small></sup> C
        </h1>
        <h2>{city_name}</h2>
      </div>
      <div className="data">
        <div className="humidity">
          <img src={humidity} alt="" />
          <h3 style={{marginLeft:10}}>{humidity_value}%</h3>
         
        </div>
        <div className="wind-speed">
          <img src={wind} alt="" />
          <h3 style={{marginLeft:10}}>{wind_value} Kmh <sup>-1</sup></h3>
          
        </div>
      </div>
      <div className="majbori">
        <h3>Humidity</h3>
        <h3>Wind Speed</h3>

      </div>
    </div>
  );
}

export default App;
