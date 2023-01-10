import React from 'react'
import Image from 'next/image';

const Carrosel = ({...props}) => {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide carousel-dark" data-bs-touch="false">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image width="440px" height='435px' src={props.img1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <Image width="440px" height='435px' src={props.img2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <Image width="440px" height='435px' src={props.img3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev cor-b-6" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next cor-b-6" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrosel