import React from 'react'
import img1 from '../../assets/avataaars.svg'
import style from './Home.module.css'

export default function Home() {
  return <>
  <div className={`${style.home} d-flex justify-content-center align-items-center text-white flex-colmn`}>
     <div className="text-center">
         <img src={img1} className={`${style.img}`} alt="img1" />
         <div className=' text-center pt-4 text-white'>
          <h2 className='text-uppercase mb-3 fs-1 fw-bolder'>start Framework</h2>
          <div class="d-flex align-items-center justify-content-center mb-3">
            <div  class={`line me-3`} >
            </div>
            <i class="fa-solid fa-star"></i>
            <div  class={`line ms-3`} >
            </div>
          </div>
          
         </div>
     </div>

  </div>
  </>
}
