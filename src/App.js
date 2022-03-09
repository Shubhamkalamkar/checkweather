import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

const API_KEY = "f1ea7cd793134d898b8134143220903";
const Container = styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow: 0 3px 6px 0 #555;
padding: 20px 10px;
border-radius:4px
width:380px;
background: white;
`;
const AppLabel = styled.span`
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const featchWeather = async (e) => {
    e.preventDefault();
    const responce = await axios.get(
      // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    updateWeather(responce.data);
  };

  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {weather ? (
        <WeatherComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} featchWeather={featchWeather} />
      )}
    </Container>
  );
}

export default App;
