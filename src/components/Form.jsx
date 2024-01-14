import React, { useRef } from 'react'

const Form = ({fetchWeather}) => {
  const user = useRef('')
  
  return (
   
    <div className='w-100 d-flex mt-4 justify-content-center'>
        <input type="text" ref={user} placeholder='Enter Country...' className='form-control ms-5' />
        <button onClick={()=> fetchWeather(user.current.value)} className='btn bg-dark text-white me-5 ms-2'>Search</button>
        
    </div>
  )
}

export default Form