/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { FaLocationDot } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
// import { CiCalendarDate } from "react-icons/ci";

const Card = ({data}) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if(JSON.stringify(data) !== '{}'){
    return (
      <div className=' d-flex flex-column align-items-center gap-2 mt-4'>
        <Clock value={value} className="my-2" />
        <h4><FaLocationDot className='ff' />{data.name}, {data.sys.country}</h4>
        <div className='h card shadow-lg d-flex flex-column align-items-center w-50 rounded-4 '>
        <h1 className='mt-2'><img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} />{data.main.temp}°C</h1>
        <p className='t'> <b>{data.weather[0].main}</b></p>
        </div>
        <p className='mb-5 fw-bold'><IoPeople className='mx-1 text-black'/>Humidity: {data.main.humidity}%</p>
      </div>
    )
  }
  else{
    return(<h1 className='text-center'>Loading....</h1>)
  }
  
  
}

export default Card