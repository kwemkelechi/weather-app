import React from 'react';
import '../styles.css';
import { Button } from 'semantic-ui-react';
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const WeatherCard = ({weatherData}) => (
    <div className="main">
        <div className="top">
            <p className="header">{weatherData.name}</p>
            <Button className="button" inverted color="blue" circular icon="refresh" onClick={refresh} />
        </div>
        <div className="flex">
            <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
            <p className="description">{weatherData.weather[0].main}</p>
        </div>
        <div className="flex">
            <p className="temp"><img src="/hot.png" alt="hot" /> {weatherData.main.temp} &deg;C</p>
            <p className="temp"><img src="/humidity.png" alt="humidity" /> {weatherData.main.humidity} %</p>
        </div>
        <div className="flex">
        <p className="sunrise-sunset"><img src="/sunrise.png" alt="sunrise" /> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset"><img src="/sunset.png" alt="sunset" /> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    </div>
)

export default WeatherCard;