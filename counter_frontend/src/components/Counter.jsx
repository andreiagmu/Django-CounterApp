import { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

function Counter() {
  const [counterValue, setCounterValue] = useState(50)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/get-counter/').then(res => setCounterValue(res.data.value))
  }, [])

  function handleIncrement() {
    axios.post('http://127.0.0.1:8000/api/increment-counter/').then(res => setCounterValue(res.data.value))
  }

  function handleDecrement() {
    axios.post('http://127.0.0.1:8000/api/decrement-counter/').then(res => setCounterValue(res.data.value))
  }

  function handleReset() {
    axios.post('http://127.0.0.1:8000/api/reset-counter/').then(res => setCounterValue(res.data.value))
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