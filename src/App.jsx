import "./App.css";
import React, { useEffect, useState } from "react";


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  
  const API_URL = 'https://api.openweathermap.org/data/2.5';
  const API_KEY = 'a2767a1d3470df78ba6f059b52aff766';


  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)

        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      <h1>Abhiihub Weather App</h1>
    </div>
  );
}

export default App;
