import { useState, useEffect } from 'react'
import liff from '@line/liff'
import './App.css'
import line from './line'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [token, getToken] = useState('')

  useEffect(() => {
    liff.init({
      liffId: '2003506597-kG1pOD0X'
    })
  }, [])

  const handleSubmit = async() => {
    try {
      const lineToken = liff.getIDToken()
      console.log(lineToken)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <button type='submit' className='button' onClick={handleSubmit}>submit</button>
      <div>{token}</div>
    </>
  )
}

export default App
