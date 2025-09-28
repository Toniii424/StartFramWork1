import React, { useState, useEffect } from 'react';
import style from './Contat.module.css'

export default function Contact() {

  return <>
  
  <div className={`${style.contact} mb-4 pt-4`}>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center pt-4">portfolio component</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className={`line me-3 ${style.bg}`}></div>
              <i className="fa-solid fa-star"></i>
              <div className={`line ms-3 ${style.bg}`}></div>
            </div>
            <form action="" className='w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid'>
                  <label htmlFor="userName" className={`${style.label}`}>userName :</label>
                  <input id="userName" type="text" placeholder="userName" name="userName" className={`form-control  border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid`} />

                  <label htmlFor="userAge" className={`${style.label}`}>userAge : </label>
                  <input id="userAge" type="text" placeholder="userAge" name="userName" className={`form-control  border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid`} />

                  <label htmlFor="userEmail" className={`${style.label}`} >userEmail :</label>
                  <input id="userEmail" type="text" placeholder="userEmail" name="userName" className={`form-control  border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid`} />

                  <label htmlFor="userPassword" className={`${style.label}`} >userPassword :</label>
                  <input id="userPassword" type="text" placeholder="userPassword" name="userName" className={`form-control  border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid`} />


                  <button  className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}}> send Message </button>




 

            </form>
            
  </div>
  
  
  
  
  
  </>
}
