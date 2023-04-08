import "./App.css";
import React, { useEffect, useState } from "react";

// import dotenv from "dotenv";
// dotenv.config();

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${import.meta.env.VITE_API_KEY}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_URL}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])

  return (
    <div className="App">
      <h1>Abhiihub Weather App</h1>
    </div>
  );
}

export default App;
