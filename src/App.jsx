import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import Service from './pages/Service'
import Details from './pages/Details'
import About from './pages/About'
import Customers from './pages/Customers'


export const App = () => {
  return (
    <div className='flex flex-col '>
      <Header/>
      <Home/>
      <Service/>
      <Details/>
      <Customers/>
      <About/>
    </div>
  )
}

export default App