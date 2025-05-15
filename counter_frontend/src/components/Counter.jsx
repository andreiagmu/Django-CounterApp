import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

// Constants
const BASE_URL = 'http://127.0.0.1:8000';
const API_URL = `${BASE_URL}/api`;
const ENDPOINTS = {
  GET_COUNTER: `${API_URL}/get-counter/`,
  INCREMENT_COUNTER: `${API_URL}/increment-counter/`,
  DECREMENT_COUNTER: `${API_URL}/decrement-counter/`,
  RESET_COUNTER: `${API_URL}/reset-counter/`
};

function Counter() {
  const [counterValue, setCounterValue] = useState(50)

  useEffect(() => {
    axios.get(ENDPOINTS.GET_COUNTER).then(res => setCounterValue(res.data.value))
  }, [])

  function handleIncrement() {
    axios.post(ENDPOINTS.INCREMENT_COUNTER).then(res => setCounterValue(res.data.value))
  }

  function handleDecrement() {
    axios.post(ENDPOINTS.DECREMENT_COUNTER).then(res => setCounterValue(res.data.value))
  }

  function handleReset() {
    axios.post(ENDPOINTS.RESET_COUNTER).then(res => setCounterValue(res.data.value))
  }

  return (
    <>
      <div className='p-40 max-w-3xl mx-auto flex space-x-4'>
        <button className='bg-blue-500 text-white p-4 rounded-lg' onClick={handleIncrement}>Increment</button>
        <p className='border shadow-md max-w-fit p-6 rounded-lg text-2xl'>Counter Value: {counterValue}</p>
        <button className='bg-red-500 text-white p-4 rounded-lg' onClick={handleDecrement}>Decrement</button>
        <button className='bg-green-400 p-4 px-10 rounded-lg' onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

export default Counter