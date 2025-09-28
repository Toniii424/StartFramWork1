import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return<>

  <footer className={`${style.footer}`}> 
    <div className={`${style.cradGroup} m-4`}>
     <div className={`${style.crad}`}>
      <div className='text-center p-3 '>
        <h3 >LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
     </div>
     <div className={`${style.crad}`}>
      <div className='text-center p-3 '>
        <h3 >AROUND THE WEB</h3>
        <div className={style.icons}>
  <i className={`fa-brands fa-facebook mx-1 ${style.icon}`}></i>
  <i className={`fa-brands fa-twitter mx-1 ${style.icon}`}></i>
  <i className={`fa-brands fa-linkedin-in mx-1 ${style.icon}`}></i>
  <i className={`fa-solid fa-globe mx-1 ${style.icon}`}></i>
        </div>



      </div>
     </div>
     <div className={`${style.crad}`}>
      <div className='text-center p-3 '>
        <h3>ABOUT FREELANCER</h3>
        <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
      </div>
     </div>
    </div>     
  </footer>
  <div className={`${style.end}`}>
      <p>Copyright © Your Website 2021</p>
  </div>

  
  
  </>
}
