import styled from "styled-components";

export const WeatherInfoIcons = {
  sunset: "/checkweather/icons/temp.svg",
  sunrise: "/checkweather/icons/temp.svg",
  humidity: "/checkweather/icons/humidity.svg",
  wind: "/checkweather/icons/wind.svg",
  pressure: "/checkweather/icons/pressure.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
`;
const Condition = styled.span`
  margin: 20px;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherLogo = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`;
const WeatherInfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 25px 10px;
  text-align: start;
  width: 90%;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  // const isDay = weather?.weather[0].icon?.includes("d");

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${weather?.current?.temp_c}°C`}</span>
          {` | ${weather?.current?.condition?.text}`}
        </Condition>
        <WeatherLogo src="/checkweather/icons/perfect-day.svg" />
      </WeatherCondition>
      {/* <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location> */}
      <Location>{`${weather?.location?.name}, ${weather?.location?.country}`}</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        {/* <WeatherInfoComponent
          name={isDay ? "sunset" : "sunrise"}
          value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}
          name={isDay ? "sunset" : "sunrise"}
          value=""
        /> */}
        <WeatherInfoComponent name="humidity" value={weather?.current?.humidity} />
        <WeatherInfoComponent name="wind" value={weather?.current?.wind_kph} />
        <WeatherInfoComponent name="pressure" value={weather?.current?.pressure_mb} />
      </WeatherInfoContainer>
    </>
  );
};
export default WeatherComponent;
