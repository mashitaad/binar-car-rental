import React from "react"
import "./hero.css"
import { Link } from "react-router-dom"
import CustomButton from "../button/Button"
import hero from "../../../assets/img/img_hero.png"

export default function Hero({showButton = true}) {
  return (
    <>
      <div className="homepage position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="hero_content">
                <h1 className="title">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p className="paragraph">
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas<br></br>
                  terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br></br>
                  untuk sewa mobil selama 24 jam.
                </p>
                {showButton && <Link to="/search"><CustomButton>Mulai Sewa Mobil</CustomButton></Link>}
              </div>
            </div>
            <div className="image_hero col-md-6 d-flex">
              <img className="img-fluid" src={hero} alt=" " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
