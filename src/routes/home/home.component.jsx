import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePage from '../../components/homePage/homePage.component'
const Home = () => {
  return (
    <div>
      <Outlet />
      <HomePage/>
    </div>
  )
}

export default Home