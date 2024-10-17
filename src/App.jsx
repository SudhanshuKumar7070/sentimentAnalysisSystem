import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReviewSection from './components/ReviewSection'
import { ThisProvider } from './components/context/context'
import HomeFile from './components/HomeFile'
import ShowReview from './components/ShowReview'
// import FirstPage from './FirstPage'
import FirstPageBK from './components/FirstPageBK'
import Navbar from './components/Navbar/Navbar'
function App() {
  

  return (
    <>
  
  {/* <FirstPage/> */}
  <Navbar/>
  <FirstPageBK/>
     
   
    </>
  )
}

export default App
