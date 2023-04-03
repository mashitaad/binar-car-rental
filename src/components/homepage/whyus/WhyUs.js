import React from 'react';
import './whyus.css'

export default function WhyUs({ whyUsCom }) {
  return (
    <>
      <div className="container">
        <div>
          <h1 className='whyus-title'>Why Us?</h1>
          <p className='whyus-paragraph'>Mengapa harus pilih Binar Car Rental?</p>
        </div>

        <div className="row card-section">
          {whyUsCom.map((item) => {
            return (
              <div className="col-md-3" key={item.id}>
                <div className="desc-whyus">
                  <img src={item.icon} alt="icon_complete" />
                  <div className="card-body">
                    <h5 className="desc-title">{item.title}</h5>
                    <p className="desc-para">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}