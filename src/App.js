import React, { useEffect, useState } from 'react'
import "./App.css"
import Form from './components/Form'
import Card from './components/Card'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { api, api_key } from './api/api'

const App = () => {

  const[city,Setcity]=useState('Taunggyi')
  const [data,Setdata]= useState({})

  const fetchWeather = async (cname)=>{
    if( cname !== undefined){
      Setcity(cname)
    }

    try {
    
    const res = await api.get(`/weather?q=${city}&appid=${api_key}`)
    Setdata(res.data);
      
    } catch (error) {
      
    }
    
  }
  
  useEffect(()=>{
    fetchWeather()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  return (
    <div className='f w-full min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='a shadow-lg bg-light gap-4 w-50 rounded-4'>
      <Form fetchWeather={fetchWeather}/>

      <Card data= {data}/>
      </div>
    </div>
  )
}

export default App