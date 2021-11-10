import React from 'react'
import { useEffect, useState } from 'react';
import './weatherStatus.css';

const WeatherStatus = () => {

    const [weatherToday, setWeatherToday ] = useState('placeholder');
    const [weatherTomorrow, setWeatherTomorrow ] = useState('placeholder');
    

    useEffect(()=> {
        const url = 'https://api.weather.gov/gridpoints/TOP/31,80/forecast';

        const getData = (data) => {
            console.log('data passed in')
            console.log(data)
            const nextDay = 2;
            const toDay = 0;
            setWeatherToday(data.properties.periods[toDay].shortForecast);
            setWeatherTomorrow(data.properties.periods[nextDay].shortForecast);
        }
        const request = async () =>{
            try {
                const data = await fetch(url)
                 .then (res => res.json() )
                getData(data);
            } catch (error) {
                    console.log(`this is the error: ${error}`); 
                } 
        }
        request();          
},[weatherToday, weatherTomorrow])

    return (
        <>
        <div className="weather__status-container">Weather today:
            <span className="weather-forecast">{weatherToday}</span>Tomorrow: <span className="weather-tomorrow-forecast">{weatherTomorrow}</span>
        </div>
        </>
    )
}

export { WeatherStatus }