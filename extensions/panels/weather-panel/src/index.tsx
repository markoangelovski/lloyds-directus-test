import React, { useEffect, useState } from "react";

const WeatherPanel = () => {
  const [weather, setWeather] = useState<string>("Loading...");

  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.1&current_weather=true")
      .then((res) => res.json())
      .then((data) => setWeather(`${data.current_weather.temperature}°C`))
      .catch(() => setWeather("Error fetching weather"));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h3>Weather</h3>
      <p>{weather}</p>
    </div>
  );
};

export default WeatherPanel;
