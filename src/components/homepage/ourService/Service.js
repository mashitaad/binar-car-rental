import React from 'react';
import img_service from '../../../assets/img/img_service.png'
import "./service.css";

export default function ourService({ serviceCom }) {
  return (
    <>
      <div className='main position-relative'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image_service">
                <img className='img-fluid' src={img_service} alt=" " />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center ml-5">
              <div className="service-content">
                <h1 className='service-title'>Best Car Rental for any kind of trip in<br></br>(Lokasimu)!</h1>
                <p className='service-paragraph'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga<br></br>
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta<br></br>
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,<br></br>
                meeting, dll.</p>

                <ul>
                  {serviceCom.map((item) => {
                    return (
                      <li key={item.id}>
                        <img src={item.image} alt={item.alt} />{item.content}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
