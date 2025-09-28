import React from 'react'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import style from './Layout.module.css'

export default function Layout() {
  return <>
  <Navbar/>
  <div className={`${style.style} `} >
    <Outlet></Outlet>
  </div>

  <Footer/>
  
  
  </>
}
