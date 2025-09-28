import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Component/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'


const routers =createBrowserRouter([
 {path:'/',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'/about',element:<About/>},
  {path:'/portfolio',element:<Portfolio/>},
  {path:'/contact',element:<Contact/>}
 ]}



]);

function App() {


  return<>
     

     <RouterProvider router={routers}></RouterProvider>



    </>

}

export default App
