import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import Service from './pages/Service'
import Details from './pages/Details'
import Reviews from './pages/Reviews'
import About from './pages/About'

export const App = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Header/>
      <Home/>
      <Service/>
      <Details/>
      {/* <Reviews/> */}
      <About/>
    </div>
  )
}

export default App