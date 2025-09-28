import React from 'react'
import { Link, NavLink } from 'react-router-dom' 
import style from './Navbar.module.css'

export default function Navbar() {
  return <>
<nav className={`navbar navbar-expand-lg fixed-top py-4 ${style.nav}`}>
  <div className={`container ${style.styleNav}`}>
    <Link className="navbar-brand text-white text-uppercase fw-bolder fs-2" to="/">Start Framework </Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" />
</button>


    <div className="collapse navbar-collapse d-flex" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-3">
          <NavLink className=" nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="/about">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" me-3 nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="/portfolio">portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className=" me-3 nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" aria-current="page" to="/contact">contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>

}
