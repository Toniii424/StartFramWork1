import React, { useState } from 'react'
import style from './Portfolio.module.css'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'

export default function Portfolio() {
  const [modalImg, setModalImg] = useState(img1);

  function showModal(imgSrc) {
    setModalImg(imgSrc);
  }

  return <>
      <div className={`${style.prtfolio} mb-4 pt-4`}>
        <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-center pt-4">portfolio component</h2>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className={`line me-3 ${style.bg}`}></div>
          <i className="fa-solid fa-star"></i>
          <div className={`line ms-3 ${style.bg}`}></div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => showModal(img1)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img src={img1} className="w-100 rounded-3" alt="poert2" />
                  <div className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-lg-4 col-md-6">
              <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => showModal(img2)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img src={img2} className="w-100 rounded-3" alt="poert2" />
                  <div className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-lg-4 col-md-6">
              <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => showModal(img3)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img src={img3} className="w-100 rounded-3" alt="poert2" />
                  <div className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-lg-4 col-md-6">
              <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => showModal(img1)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img src={img1} className="w-100 rounded-3" alt="poert2" />
                  <div className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-lg-4 col-md-6">
              <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => showModal(img2)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img src={img2} className="w-100 rounded-3" alt="poert2" />
                  <div className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </button>
            </div>
            <div className="col-lg-4 col-md-6">
              <button
                type="button"
                className="border-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => showModal(img3)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img src={img3} className="w-100 rounded-3" alt="poert2" />
                  <div className={`${style.layer} position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center`}>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-0">
              <img src={modalImg} className="w-100" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>

}
